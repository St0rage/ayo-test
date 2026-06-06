import BasePage from "./base-page";

class VerificationPage extends BasePage {
  /* --- LOCATORS --- */
  public get verificationTitle() {
    return browser.$("//android.widget.ImageView/following-sibling::android.view.View[1]");
  }

  /* --- ACTIONS --- */
}

export default new VerificationPage();
