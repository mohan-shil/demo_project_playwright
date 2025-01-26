import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("navbar contains home, tech stack, experience, contact", async ({
  page,
}) => {
  const homeLink = page.getByRole("link", { name: "Home" });
  const experienceLink = page.getByRole("link", { name: "Experience" });
  const contactLink = page.getByRole("link", { name: "Contact" });

  await expect(homeLink).toBeEnabled();
  await expect(experienceLink).toBeEnabled();
  await expect(contactLink).toBeEnabled();
});
test("heading contains Mohan Shil", async ({ page }) => {
  const heading = page.getByRole("heading", { name: "Hi 👋🏽 I'm Mohan Shil" });
  await expect(heading).toContainText("Mohan Shil");
});

test("download button is functional", async ({ page }) => {
  const downloadCv = page.getByRole("link", { name: "Download My CV" });
  await expect(downloadCv).toContainText("Download My CV");
  await expect(downloadCv).toBeEnabled();
});

test("Technology stack heading is visible", async ({ page }) => {
  const techStackHeading = page.getByRole("heading", {
    name: "Technology Stack",
  });
  await expect(techStackHeading).toBeVisible();
});

test("contact email is visible", async ({ page }) => {
  const contactEmail = page.getByText("ContactEmail: mohan.shil.007@");
  await expect(contactEmail).toBeVisible();
});
