import BasePage from "./base-page";

export class GlobalPage extends BasePage {
  constructor(web: WebdriverIO.Browser) {
    super(web);
  }

  /* --- LOCATORS --- */

  public get daftarBtn() {
    return this.web.$("#sign-up-btn");
  }

  public get registerField() {
    return this.web.$("#phone-number");
  }

  public get registerFieldAlert() {
    return this.web.$(".text-error");
  }

  public get registerSelanjutnyaBtn() {
    return this.web.$("#btn-next-register");
  }

  public get masukBtn() {
    return this.web.$("#sign-in-btn");
  }

  public get masukField() {
    return this.web.$("#_phone");
  }

  public get masukSelanjutnyaBtn() {
    return this.web.$("#btn-check-credential");
  }

  public get bottomAlert() {
    return this.web.$("//div[contains(@class, 'toastify-bottom')]");
  }

  /* --- ACTIONS --- */
  public async inputRegister(value: string) {
    await this.daftarBtn.click();
    await this.registerField.waitForDisplayed();
    await this.registerField.waitForStable();
    await this.registerField.setValue(value);
  }

  public async clickRegisterSelanjutnya() {
    await this.registerSelanjutnyaBtn.click();
  }

  public async inputMasuk(value: string) {
    await this.masukBtn.click();
    await this.masukField.waitForDisplayed();
    await this.registerField.waitForStable();
    await this.masukField.setValue(value);
  }

  public async clickMasukSelanjutnya() {
    await this.masukSelanjutnyaBtn.click();
  }
}
