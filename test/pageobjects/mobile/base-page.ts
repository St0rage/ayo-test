export default class BasePage {
  public async openApp(appPackage: string, appActivity: string) {
    await browser.startActivity(appPackage, appActivity);
  }
}
