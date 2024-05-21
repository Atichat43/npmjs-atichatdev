import { test, expect } from '@playwright/test';

test.describe('fields', () => {
  test('visible', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/account/profile');
    await expect(page.locator('[data-test="first-name"]')).toBeVisible();
    await expect(page.locator('[data-test="last-name"]')).toBeVisible();
  });

  test('values', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/#/account/profile');
    await expect(page.locator('[data-test="first-name"]')).toHaveValue('Jane');
    await expect(page.locator('[data-test="last-name"]')).toHaveValue('Doe');
  });
});
