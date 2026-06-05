import BasePage from "./base-page";

export class VerificationPage extends BasePage {
  constructor(web: WebdriverIO.Browser) {
    super(web);
  }

  /* --- LOCATORS --- */
  public get verificationTitle() {
    return this.web.$(".frame-text>h3");
  }

  /* --- ACTIONS --- */
}
