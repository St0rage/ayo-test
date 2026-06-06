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

  it("Login dengan email invalid - LOG_001", async () => {
    const email = "daniyudistira@gmail.aw";

    await globalPage.openApp(appPackage, appActivity);
    await globalPage.selectMenu("Masuk");
    await loginPage.clickMasuk();
    await loginPage.inputMasuk(email);
    await loginPage.clickSelanjutnya();

    await expect(loginPage.bottomAlert).toBeDisplayed({ wait: 10000 });
  });

  it("Login dengan nomor ponsel lebih dari 20 karakter - LOG_002", async () => {
    const phoneNo = "8592185921859218592185921";

    await globalPage.openApp(appPackage, appActivity);
    await globalPage.selectMenu("Masuk");
    await loginPage.clickMasuk();
    await loginPage.inputMasuk(phoneNo);
    await loginPage.clickSelanjutnya();

    await expect(loginPage.bottomAlert).toBeDisplayed({ wait: 10000 });
  });

  it("Login dengan email valid - LOG_003", async () => {
    const email = "daniyudistira@gmail.com";

    await globalPage.openApp(appPackage, appActivity);
    await globalPage.selectMenu("Masuk");
    await loginPage.clickMasuk();
    await loginPage.inputMasuk(email);
    await loginPage.clickSelanjutnya();

    await expect(verificationPage.verificationTitle).toHaveAttribute("content-desc", "Masukkan Kode Verifikasi");
  });

  it("Login dengan nomor ponsel valid - LOG_004", async () => {
    const email = "085951415092";

    await globalPage.openApp(appPackage, appActivity);
    await globalPage.selectMenu("Masuk");
    await loginPage.clickMasuk();
    await loginPage.inputMasuk(email);
    await loginPage.clickSelanjutnya();

    await expect(verificationPage.verificationTitle).toHaveAttribute("content-desc", "Verifikasi Nomor");
  });
});
