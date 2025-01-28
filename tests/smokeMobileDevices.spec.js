import { test, expect } from "@playwright/test";
import { LandingPage } from "../pageobjects/LandingPage";

test.describe("IOS Mobile Mode", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navbar contains home, tech stack, experience, contact", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    await landingPage.navButton.click();
    await expect(landingPage.homeLink).toBeEnabled();
    await expect(landingPage.experienceLink).toBeEnabled();
    await expect(landingPage.contactLink).toBeEnabled();
  });
  test("heading contains Mohan Shil", async ({ page }) => {
    const landingPage = new LandingPage(page);
    await expect(landingPage.heading).toContainText("Mohan Shil");
  });

  test("download button is functional", async ({ page }) => {
    const landingPage = new LandingPage(page);
    await expect(landingPage.downloadCv).toContainText("Download My CV");
    await expect(landingPage.downloadCv).toBeEnabled();
  });

  test("technology stack heading is visible", async ({ page }) => {
    const landingPage = new LandingPage(page);
    await expect(landingPage.techStackHeading).toBeVisible();
  });

  test("specialization section is visible and proper texts are present", async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    await expect(landingPage.specializationTextLoc).toContainText(
      "Testing APIs with Postman"
    );
  });

  test("contact email is visible", async ({ page }) => {
    const landingPage = new LandingPage(page);
    await expect(landingPage.contactEmail).toBeVisible();
  });
});
