export default class BasePage {
  protected mobile: WebdriverIO.Browser;

  constructor(mobile: WebdriverIO.Browser) {
    this.mobile = mobile;
  }

  public async openApp(appPackage: string, appActivity: string) {
    await this.mobile.startActivity(appPackage, appActivity);
  }
}
