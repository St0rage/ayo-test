export default class BasePage {
  protected web: WebdriverIO.Browser;

  constructor(web: WebdriverIO.Browser) {
    this.web = web;
  }

  public async open(path: string) {
    await this.web.url(path);
  }
}
