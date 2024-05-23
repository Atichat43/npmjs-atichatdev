import { test, expect } from '@playwright/test';

test.skip('failed', async ({ page }) => {
  await expect(true).toBe(false);
});
