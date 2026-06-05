import BasePage from "./base-page";

export default class VerificationPage extends BasePage {
  constructor(mobile: WebdriverIO.Browser) {
    super(mobile);
  }

  /* --- LOCATORS --- */
  public get verificationTitle() {
    return this.mobile.$("//android.widget.ImageView/following-sibling::android.view.View[1]");
  }

  /* --- ACTIONS --- */
}
