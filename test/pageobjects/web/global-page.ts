import BasePage from "./base-page";

class GlobalPage extends BasePage {
  /* --- LOCATORS --- */

  public get daftarBtn() {
    return browser.$("#sign-up-btn");
  }

  public get registerField() {
    return browser.$("#phone-number");
  }

  public get registerFieldAlert() {
    return browser.$(".text-error");
  }

  public get registerSelanjutnyaBtn() {
    return browser.$("#btn-next-register");
  }

  public get masukBtn() {
    return browser.$("#sign-in-btn");
  }

  public get masukField() {
    return browser.$("#_phone");
  }

  public get masukSelanjutnyaBtn() {
    return browser.$("#btn-check-credential");
  }

  public get bottomAlert() {
    return browser.$("//div[contains(@class, 'toastify-bottom')]");
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

export default new GlobalPage();
