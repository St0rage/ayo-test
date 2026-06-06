import BasePage from "./base-page";

class GlobalPage extends BasePage {
  /* --- LOCATORS --- */
  public bottomNavMenu(menuName: string) {
    return browser.$(`//android.widget.ImageView[@content-desc="${menuName}"]`);
  }

  /* --- ACTIONS --- */
  public async selectMenu(menuName: string) {
    const menu = this.bottomNavMenu(menuName);

    await menu.waitForDisplayed();
    await menu.click();
  }
}

export default new GlobalPage();
