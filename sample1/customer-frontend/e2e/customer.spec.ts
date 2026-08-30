import { expect, test } from "@playwright/test";

test("顧客可以登入並查看積分及優惠券", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "一鍵填入演示帳號" }).click();
  await page.getByRole("button", { name: "登入會員中心" }).click();
  await expect(page).toHaveURL(/\/member$/);
  await expect(page.getByText("1,280").first()).toBeVisible();

  await page.getByRole("link", { name: /積分/ }).first().click();
  await expect(page).toHaveURL(/\/member\/points$/);
  await expect(
    page.getByRole("heading", { name: "積分收支紀錄" }),
  ).toBeVisible();

  await page.goto("/member/coupons");
  await expect(page.getByText("會員現金券")).toBeVisible();
  await expect(page.getByText("單次消費滿 HK$300 可使用。")).toBeVisible();
});

test("顧客可以用電郵建立本地演示帳戶", async ({ page }) => {
  await page.goto("/register");
  await page.getByLabel("會員姓名").fill("測試會員");
  await page.getByLabel("電郵地址").fill("new-member@example.hk");
  await page.getByLabel("密碼", { exact: true }).fill("password88");
  await page.getByLabel("確認密碼").fill("password88");
  await page.getByRole("button", { name: "建立會員帳戶" }).click();
  await expect(page).toHaveURL(/\/member$/);
  await expect(page.getByText("測試會員")).toBeVisible();
});

for (const viewport of [
  { width: 390, height: 844 },
  { width: 768, height: 900 },
  { width: 1440, height: 1000 },
]) {
  test(`首頁在 ${viewport.width}px 沒有橫向溢出`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}
