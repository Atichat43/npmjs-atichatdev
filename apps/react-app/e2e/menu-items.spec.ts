import { test, expect } from '@playwright/test';
import { ready } from './utils/ready';

test.describe('menu items', () => {
  test('should have the correct menu items', async ({ page }) => {
    await page.goto('/');

    await ready(page);

    await expect(page.getByRole('button', { name: 'แคมเปญ' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'หน้าร้าน' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'การเงิน' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'จัดการทีม' })).toBeVisible();
  });
});
