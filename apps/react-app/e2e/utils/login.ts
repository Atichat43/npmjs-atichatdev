import { Page } from '@playwright/test';

export async function login(
  page: Page,
  username?: string,
  password?: string
): Promise<void> {
  await page.locator('[data-test="email"]').fill(username as string);
  await page.locator('[data-test="password"]').fill(password as string);
  await page.locator('[data-test="login-submit"]').click();

  await page.waitForURL('**/account**');
}
