import { readFileSync } from 'fs';
import { chromium, expect, FullConfig } from '@playwright/test';

import { login } from '../utils/login';

/**
 * This function is run once at the start of the test suite.
 * It sets up shared cookies and other necessary configurations before running any tests.
 */
async function globalSetup(config: FullConfig): Promise<void> {
  const { storageState, baseURL } = config.projects[0].use;

  const hasLoggedIn = hasRecentlyLoggedIn(storageState as string);

  if (!hasLoggedIn) {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(baseURL as string);

    await login(page, username, password);

    await expect(page.getByTestId('avatar')).toBeVisible();

    await page.context().storageState({ path: storageState as string });
    await browser.close();
  }
}
export default globalSetup;

/**
 * This function checks if there is already a valid cookie to skip the login process.
 * It is particularly useful during development when running multiple tests repeatedly.
 */
const hasRecentlyLoggedIn = (storageStatePath: string): boolean => {
  try {
    const currentTime = new Date().getTime();

    const json = JSON.parse(readFileSync(storageStatePath).toString());

    const cookie = json['cookies'][0];
    const expires = cookie['expires'] as number;

    return expires > currentTime;
  } catch (error) {
    return false;
  }
};
