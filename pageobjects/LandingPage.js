export class LandingPage {
  constructor(page) {
    this.page = page;
    this.homeLink = this.page.getByRole("link", { name: "Home" });
    this.experienceLink = this.page.getByRole("link", { name: "Experience" });
    this.contactLink = this.page.getByRole("link", { name: "Contact" });
    this.heading = this.page.getByRole("heading", {
      name: "Hi 👋🏽 I'm Mohan Shil",
    });
    this.downloadCv = this.page.getByRole("link", { name: "Download My CV" });
    this.techStackHeading = this.page.getByRole("heading", {
      name: "Technology Stack",
    });
    this.specialization = this.page.locator("[id='specialization']");
    this.specializationTextLoc = this.specialization.getByText(
      "Testing APIs with Postman"
    );
    this.contactEmail = this.page.getByText("ContactEmail: mohan.shil.007@");
    this.navBar = this.page.locator("nav");
    this.navButton = this.navBar.getByRole("button");
  }
}
