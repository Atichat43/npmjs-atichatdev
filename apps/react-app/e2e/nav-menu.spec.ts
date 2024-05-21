import { test, expect } from '@playwright/test';

test('nav-menu', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/#/account/profile');

  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    'Jane Doe'
  );
});
