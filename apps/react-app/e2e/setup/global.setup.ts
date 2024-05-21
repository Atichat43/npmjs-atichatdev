import { readFileSync } from 'fs';
import { chromium, expect, FullConfig } from '@playwright/test';

import { login } from '../utils/login';

/**
 * This function is run once at the start of the test
 * This is where we established shared cookies and other setups we want to
 * do before running any test
 * @param config
 */
async function globalSetup(config: FullConfig): Promise<void> {
  // TODO: recheck env values
  console.log('BASE_URL', process.env.BASE_URL);
  console.log('CI', process.env.CI);
  console.log('NODE_ENV', process.env.NODE_ENV);

  const { storageState, baseURL } = config.projects[0].use;
  process.env.BASE_URL = baseURL;

  if (process.env.NODE_ENV === 'ci') {
    process.env.CI = 'true';
  }

  console.log('storageState', storageState);
  const hasLoggedIn = hasRecentlyLoggedIn();

  console.log('hasLoggedIn', hasLoggedIn);

  if (!hasLoggedIn) {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(process.env.BASE_URL as string);
    await expect(
      page.getByRole('link', { name: 'Practice Software Testing -' })
    ).toBeVisible();

    await page.locator('[data-test="nav-sign-in"]').click();

    await login(page, username, password);

    await page.context().storageState({ path: storageState as string });
    await browser.close();
  }
}
export default globalSetup;

/**
 * This function checks if there is already valid cookie and skips login process
 * This is very helpful during development when we run lots of tests
 */
const hasRecentlyLoggedIn = (): boolean => {
  try {
    const cookieFile = '/tmp/state.json';
    const currentTime = new Date().getTime();
    const cookieJson = JSON.parse(readFileSync(cookieFile).toString())[
      'cookies'
    ];

    const cookie = cookieJson.find((cookie) => cookie.name === 'auth0');
    const expires = cookie['expires'] as number;
    const domain = cookie['domain'];

    console.log('cookie', cookie);

    return (
      expires > currentTime &&
      domain.includes(process.env.NODE_ENV!.toUpperCase())
    );
  } catch (error) {
    return false;
  }
};
