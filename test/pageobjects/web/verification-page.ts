import BasePage from "./base-page";

class VerificationPage extends BasePage {
  /* --- LOCATORS --- */
  public get verificationTitle() {
    return browser.$(".frame-text>h3");
  }

  /* --- ACTIONS --- */
}

export default new VerificationPage();
