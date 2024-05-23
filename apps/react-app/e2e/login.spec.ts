import { test, expect } from '@playwright/test';
import { login } from './utils/login';

test.describe('Login Feature', () => {
  // this test will failed, because the login process has completed in the global setup, so the user cannot go to the login page
  test('Login', async ({ page }) => {
    test.setTimeout(300_000); // 5 minutes

    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await page.goto('/login');

    await login(page, username, password);

    await expect(page.getByTestId('avatar')).toBeVisible();
  });
});
