import { expect, test } from "@playwright/test";

async function login(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "填入演示帳號" }).click();
  await page.getByRole("button", { name: /登入管理中心/ }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
}

test("管理員可以建立會員及發放積分", async ({ page }) => {
  await login(page);
  await page.goto("/members");
  await page.getByRole("button", { name: "手動建立會員" }).click();
  await page.getByLabel("會員姓名").fill("新會員甲");
  await page.getByLabel("電郵地址").fill("member-a@example.hk");
  await page.getByRole("button", { name: "建立會員", exact: true }).click();
  const createdMember = page.getByText("新會員甲", { exact: true });
  if ((page.viewportSize()?.width ?? 0) < 768)
    await expect(createdMember.first()).toBeVisible();
  else await expect(createdMember.last()).toBeVisible();

  await page.goto("/points");
  await page.getByLabel("選擇會員搜尋").fill("陳小蝦");
  await page.getByLabel("選擇 陳小蝦").check();
  await page.getByLabel("積分數量").fill("200");
  await page.getByLabel("操作原因").fill("開幕演示積分");
  await page.getByRole("button", { name: "確認積分操作" }).click();
  await expect(page.getByText("開幕演示積分")).toBeVisible();
});

test("管理員可以建立兩種優惠券及模擬發送電郵", async ({ page }) => {
  await login(page);
  await page.goto("/coupons");
  await page.getByLabel("優惠券名稱").fill("測試現金券");
  await page.getByRole("button", { name: "建立並發放" }).click();
  await expect(page.getByText("測試現金券")).toBeVisible();

  await page.getByRole("button", { name: "滿額抵扣券" }).click();
  await page.getByLabel("優惠券名稱").fill("測試滿額券");
  await page.getByRole("button", { name: "建立並發放" }).click();
  await expect(page.getByText("測試滿額券")).toBeVisible();

  await page.goto("/campaigns");
  await page.getByLabel("郵件主題").fill("週末測試推廣");
  await page.getByRole("button", { name: "模擬發送郵件" }).click();
  await expect(page.getByText(/已生成模擬發送記錄/)).toBeVisible();
});

test("管理員可以建立宣傳草稿、發布並置頂影片", async ({ page }) => {
  await login(page);
  await page.goto("/promotions");
  await page.getByRole("button", { name: "新增宣傳活動" }).click();
  await page.getByLabel("宣傳標題").fill("霓虹會員挑戰夜");
  await page
    .getByLabel("宣傳內容")
    .fill("兩店會員均可參加的前端演示宣傳活動。");
  await page.getByRole("button", { name: "建立宣傳草稿" }).click();
  const card = page.getByText("霓虹會員挑戰夜").locator("..", { hasText: "霓虹會員挑戰夜" });
  await expect(page.getByText("霓虹會員挑戰夜")).toBeVisible();
  await card.getByRole("button", { name: "發布" }).click();

  await page.goto("/videos");
  await expect(page.getByText("最多 200MB")).toBeVisible();
  const pinButton = page.getByRole("button", { name: "置頂", exact: true }).first();
  await pinButton.click();
  await expect(page.getByText("置頂", { exact: true }).first()).toBeVisible();
});

for (const viewport of [
  { width: 390, height: 844 },
  { width: 1024, height: 900 },
  { width: 1440, height: 1000 },
]) {
  test(`管理端在 ${viewport.width}px 沒有橫向溢出`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await login(page);
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}
