import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // Ensures Playwright looks in "tests" folder
  use: {
    headless: true,
  },
  use: {
    launchOptions: {
      args: ['--disable-web-security']
    }
  }
});
