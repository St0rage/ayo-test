import BasePage from "./base-page";

export default class GlobalPage extends BasePage {
  constructor(mobile: WebdriverIO.Browser) {
    super(mobile);
  }

  /* --- LOCATORS --- */
  public bottomNavMenu(menuName: string) {
    return this.mobile.$(`//android.widget.ImageView[@content-desc="${menuName}"]`);
  }

  /* --- ACTIONS --- */
  public async selectMenu(menuName: string) {
    const menu = this.bottomNavMenu(menuName);

    await menu.waitForDisplayed();
    await menu.click();
  }
}
