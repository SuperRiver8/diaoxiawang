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
  await expect(page.getByRole("row", { name: /新會員甲/ })).toBeVisible();

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
