import { test, expect } from '@playwright/test';

test('failed', async ({ page }) => {
  await expect(true).toBe(false);
});
