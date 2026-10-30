import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { outputFolder: 'my-report' }]],
  use: {
    browserName: 'chromium',
    headless: false,
  },
});