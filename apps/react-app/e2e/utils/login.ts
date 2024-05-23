import { Page } from '@playwright/test';

export async function login(
  page: Page,
  username?: string,
  password?: string
): Promise<void> {
  const BASE_URL = process.env.BASE_URL;
  const AUTHORIZE_URL = process.env.AUTHORIZE_URL;

  await page.waitForURL(`${AUTHORIZE_URL}*`, { timeout: 30000 });

  await page
    .getByPlaceholder('username, Email or phone')
    .fill(username as string);
  await page.getByPlaceholder('Password').fill(password as string);
  await page.locator('[type=submit]').click();

  await page.waitForURL(`${BASE_URL}/*`, { timeout: 30000 });
}
