import { test, expect } from '@playwright/test';
import { ready } from './utils/ready';

test.describe('failed', () => {
  test.skip('failed for testing purpose', async ({ page }) => {
    await page.goto('/');

    await ready(page);

    await expect(false).toBe(true);
  });
});
