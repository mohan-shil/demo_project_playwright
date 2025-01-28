import { page } from "playwright";

export class LoginPage {
  constructor() {
    this.page = page;
    this.userName = page.getByPlaceholder("username");
    this.password = page.getByPlaceholder("password");
    this.submit = page.locator('[type="submit"]');
    this.alertInvalidCred = page.locator('[role="alert"]');
    this.requiredField = page.locator(
      '[class*="oxd-input-field-error-message"]'
    );
    this.profilePicDashboard = page.locator('[alt="profile picture"]');
    this.forgetPassword = page.locator(
      '[class*="orangehrm-login-forgot-header"]'
    );
    this.forgetPasswordTitle = page.locator(
      '[class*="orangehrm-forgot-password-title"]'
    );
  }
}
