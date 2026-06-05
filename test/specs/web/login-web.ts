import { expect } from "@wdio/globals";
import { GlobalPage } from "../../pageobjects/web/global-page";
import { VerificationPage } from "../../pageobjects/web/verification-page";

describe("Login", () => {
  const baseUrl = "https://ayo.co.id/";
  let web: WebdriverIO.Browser;
  let globalPage: GlobalPage;
  let verificationPage: VerificationPage;

  beforeEach(async () => {
    web = multiRemoteBrowser.getInstance("web");
    globalPage = new GlobalPage(web);
    verificationPage = new VerificationPage(web);
    await web.reloadSession();
  });

  it("Login dengan email invalid - LOG_001", async () => {
    const email = "daniyudistira@";

    await globalPage.open(baseUrl);
    await globalPage.inputMasuk(email);
    await globalPage.clickMasukSelanjutnya();

    if (!(await globalPage.bottomAlert.waitForDisplayed({ timeout: 10000 }))) {
      await globalPage.clickMasukSelanjutnya();
    }

    const alertText = (await globalPage.bottomAlert.getText()).trim();

    expect(alertText).toContain("Isian Email harus berupa alamat surel yang valid.");
  });

  it("Login dengan email domain invalid - LOG_002", async () => {
    const email = "daniyudistira@gmail.aw";

    await globalPage.open(baseUrl);
    await globalPage.inputMasuk(email);
    await globalPage.clickMasukSelanjutnya();

    if (!(await globalPage.bottomAlert.waitForDisplayed({ timeout: 10000 }))) {
      await globalPage.clickMasukSelanjutnya();
    }

    const alertText = (await globalPage.bottomAlert.getText()).trim();
    expect(alertText).toContain("Isian Email harus berupa alamat surel yang valid.");
  });

  it("Login dengan nomor ponsel menggunakan alphabet - LOG_003", async () => {
    const phoneNo = "abc";

    await globalPage.open(baseUrl);
    await globalPage.inputMasuk(phoneNo);

    await expect(globalPage.masukSelanjutnyaBtn).toBeDisabled();
  });

  it("Login dengan nomor ponsel lebih dari 20 karakter - LOG_004", async () => {
    const phoneNo = "8592185921859218592185921";

    await globalPage.open(baseUrl);
    await globalPage.inputMasuk(phoneNo);
    await globalPage.clickMasukSelanjutnya();

    if (!(await globalPage.bottomAlert.waitForDisplayed({ timeout: 10000 }))) {
      await globalPage.clickMasukSelanjutnya();
    }

    const alertText = (await globalPage.bottomAlert.getText()).trim();
    expect(alertText).toContain("Isian Nomor ponsel tidak boleh lebih dari 20 karakter.");
  });

  it("Login dengan email valid - LOG_005", async () => {
    const email = "daniyudistira@gmail.com";

    await globalPage.open(baseUrl);
    await globalPage.inputMasuk(email);
    await globalPage.clickMasukSelanjutnya();

    let titleText = "";

    if (await verificationPage.verificationTitle.waitForDisplayed({ timeout: 30000 })) {
      titleText = await verificationPage.verificationTitle.getText();
    }

    expect(titleText).toEqual("Masukkan Kode Verifikasi");
  });

  it("Login dengan nomor ponsel valid - LOG_006", async () => {
    const phoneNo = "85951415092";

    await globalPage.open(baseUrl);
    await globalPage.inputMasuk(phoneNo);
    await globalPage.clickMasukSelanjutnya();

    let titleText = "";

    if (await verificationPage.verificationTitle.waitForDisplayed({ timeout: 30000 })) {
      titleText = await verificationPage.verificationTitle.getText();
    }

    expect(titleText).toEqual("Pilih Metode Verifikasi");
  });
});
