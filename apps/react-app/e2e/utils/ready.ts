import { expect, Page } from '@playwright/test';

export async function ready(page: Page): Promise<void> {
  const timeout = 300_000; // 5 minutes

  await expect(page.getByTestId('avatar')).toBeVisible({ timeout });
}
