import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { workspaceRoot } from '@nx/devkit';

// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './e2e' }),
  globalSetup: require.resolve('./e2e/setup/global.setup.ts'),

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'html',
  workers: process.env.CI ? 1 : undefined,

  use: {
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    storageState: '/tmp/atichatdev-playwright-state.json',
  },
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   url: baseURL,
  //   cwd: workspaceRoot,
  //   command: 'npx nx serve react-app',
  //   reuseExistingServer: !process.env.CI,
  // },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
