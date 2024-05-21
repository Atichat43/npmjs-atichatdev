import { expect, Page } from '@playwright/test';

export async function ready(page: Page): Promise<void> {
  await expect(page.getByTestId('avatar')).toBeVisible({ timeout: 10000 });
}
