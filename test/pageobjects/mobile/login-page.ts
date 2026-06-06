import BasePage from "./base-page";

class LoginPage extends BasePage {
  /* --- LOCATORS --- */
  public get masukBtn() {
    return browser.$("//android.widget.Button[@content-desc='Masuk']");
  }

  public get masukField() {
    return browser.$("//android.view.View[@content-desc='Masuk']/following-sibling::android.widget.EditText[1]");
  }

  public get selanjutnyaBtn() {
    return browser.$("//android.widget.Button[@content-desc='Selanjutnya']");
  }

  public get daftarYukBtn() {
    return browser.$("//android.widget.Button[contains(@content-desc, 'Daftar yuk!')]");
  }

  public get registerField() {
    return browser.$("//android.view.View[@content-desc='Daftar']/following-sibling::android.widget.EditText[1]");
  }

  public get daftarBtn() {
    return browser.$("//android.widget.Button[@content-desc='Daftar']");
  }

  public get bottomAlert() {
    return browser.$("//android.view.View[@content-desc='Tutup']/preceding-sibling::android.view.View");
  }

  /* --- ACTIONS --- */
  public async clickMasuk() {
    await this.masukBtn.waitForDisplayed();
    await this.masukBtn.click();
  }

  public async inputMasuk(value: string) {
    await this.masukField.waitForDisplayed();
    await this.masukField.click();
    await this.masukField.setValue(value);
  }

  public async clickSelanjutnya() {
    await this.selanjutnyaBtn.click();
  }

  public async clickDaftarYuk() {
    await this.daftarYukBtn.waitForDisplayed();
    await this.daftarYukBtn.click();
  }

  public async inputRegister(phoneNumber: string) {
    await this.registerField.waitForDisplayed();
    await this.registerField.click();
    await this.registerField.setValue(phoneNumber);
  }

  public async clickDaftar() {
    await this.daftarBtn.click();
  }
}

export default new LoginPage();
