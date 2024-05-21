import { test, expect } from '@playwright/test';
import { login } from './utils/login';

test.describe('Login Feature', () => {
  // This test will fail because the login process has been completed in the global setup, so the user cannot go to the login page.
  test.skip('Login', async ({ page }) => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await page.goto('/login');

    await login(page, username, password);

    await expect(page.getByTestId('avatar')).toBeVisible();
  });
});
