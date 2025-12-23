import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  fullyParallel: true,
  timeout: 30_000,
  use: {
    baseURL: 'http://localhost:8080',
    testIdAttribute: 'data-testid',
    headless: true,
  },
});
