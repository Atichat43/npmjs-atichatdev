import { Page } from '@playwright/test';

export async function login(
  page: Page,
  username?: string,
  password?: string
): Promise<void> {
  const BASE_URL = process.env.BASE_URL;
  const AUTHORIZE_URL = process.env.AUTHORIZE_URL;
  // 5 minutes
  const timeout = 300000;

  await page.waitForURL(`${AUTHORIZE_URL}*`, { timeout });

  await page
    .getByPlaceholder('username, Email or phone')
    .fill(username as string);
  await page.getByPlaceholder('Password').fill(password as string);
  await page.locator('[type=submit]').click();

  await page.waitForURL(`${BASE_URL}/*`, { timeout });
}
