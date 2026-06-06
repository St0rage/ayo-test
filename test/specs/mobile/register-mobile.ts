import { expect } from "@wdio/globals";
import globalPage from "../../pageobjects/mobile/global-page";
import loginPage from "../../pageobjects/mobile/login-page";
import verificationPage from "../../pageobjects/mobile/verification-page";

describe("Register", () => {
  const appPackage = "coid.ayo.ayo_mobile_app";
  const appActivity = ".MainActivity";

  afterEach(async () => {
    await browser.terminateApp(appPackage);
  });

  it("Register dengan nomor ponsel lebih dari 20 karakter - REG_001", async () => {
    const phoneNo = "8592185921859218592185921";

    await globalPage.openApp(appPackage, appActivity);
    await globalPage.selectMenu("Masuk");
    await loginPage.clickMasuk();
    await loginPage.clickDaftarYuk();
    await loginPage.inputRegister(phoneNo);
    await loginPage.clickDaftar();

    await expect(loginPage.bottomAlert).toBeDisplayed({ wait: 10000 });
  });

  it("Register dengan nomor ponsel lebih dari 20 karakter - REG_002", async () => {
    const phoneNo = "1234";

    await globalPage.openApp(appPackage, appActivity);
    await globalPage.selectMenu("Masuk");
    await loginPage.clickMasuk();
    await loginPage.clickDaftarYuk();
    await loginPage.inputRegister(phoneNo);
    await loginPage.clickDaftar();

    await expect(loginPage.bottomAlert).toBeDisplayed({ wait: 10000 });
  });

  it("Register dengan nomor ponsel valid - REG_003", async () => {
    const phoneNo = "085951415092";

    await globalPage.openApp(appPackage, appActivity);
    await globalPage.selectMenu("Masuk");
    await loginPage.clickMasuk();
    await loginPage.clickDaftarYuk();
    await loginPage.inputRegister(phoneNo);
    await loginPage.clickDaftar();

    await expect(verificationPage.verificationTitle).toHaveAttribute("content-desc", "Verifikasi Nomor");
  });
});
