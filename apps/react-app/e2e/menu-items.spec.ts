import { test, expect } from '@playwright/test';

test.describe('menu items', () => {
  test('should have the correct menu items', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('avatar')).toBeVisible({ timeout: 10000 });

    await expect(page.getByRole('button', { name: 'แคมเปญ' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'หน้าร้าน' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'การเงิน' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'จัดการทีม' })).toBeVisible();
  });
});
