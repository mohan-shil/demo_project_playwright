// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
    headless: true,
    baseURL: "https://mohanshil.vercel.app/",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      testMatch: /smokeDesktopDevices.spec.js/,
    },

    {
      name: "chromium-mobile",
      use: { ...devices["iPhone 12"] },
      testMatch: /smokeMobileDevices.spec.js/,
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      testMatch: /smokeDesktopDevices.spec.js/,
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      testMatch: /smokeDesktopDevices.spec.js/,
    },
  ],
});
