import { expect } from "@wdio/globals";
import globalPage from "../../pageobjects/web/global-page";
import verificationPage from "../../pageobjects/web/verification-page";

describe("Register", () => {
  const baseUrl = "https://ayo.co.id/";

  beforeEach(async () => {
    await browser.reloadSession();
  });

  it("Register dengan email invalid - REG_001", async () => {
    const email = "daniyudistira@gmail";

    await globalPage.open(baseUrl);
    await globalPage.inputRegister(email);

    await expect(globalPage.registerSelanjutnyaBtn).toBeDisabled();
  });

  it("Register dengan email domain invalid - REG_002", async () => {
    const email = "daniyudistira@gmail.aw";

    await globalPage.open(baseUrl);
    await globalPage.inputRegister(email);
    await globalPage.clickRegisterSelanjutnya();

    await expect(globalPage.registerFieldAlert).toHaveText("Isian email harus berupa alamat surel yang valid.");
  });

  it("Register dengan nomor ponsel menggunakan alphabet - REG_003", async () => {
    const phoneNo = "abc";

    await globalPage.open(baseUrl);
    await globalPage.inputRegister(phoneNo);
    await globalPage.clickRegisterSelanjutnya();

    await expect(globalPage.registerFieldAlert).toHaveText("Nomor ponsel tidak valid.");
  });

  it("Register dengan nomor ponsel menggunakan alphabet dan lebih dari 20 karakter - REG_004", async () => {
    const phoneNo = "abcdeabcdeabcdeabcdeabcde";

    await globalPage.open(baseUrl);
    await globalPage.inputRegister(phoneNo);
    await globalPage.clickRegisterSelanjutnya();

    await expect(globalPage.registerFieldAlert).toHaveText("Isian nomor ponsel tidak boleh lebih dari 20 karakter.");
  });

  it("Register dengan nomor ponsel lebih dari 20 karakter - REG_005", async () => {
    const phoneNo = "8592185921859218592185921";

    await globalPage.open(baseUrl);
    await globalPage.inputRegister(phoneNo);
    await globalPage.clickRegisterSelanjutnya();

    await expect(globalPage.registerFieldAlert).toHaveText("Isian nomor ponsel tidak boleh lebih dari 20 karakter.");
  });

  it("Register dengan email valid - REG_006", async () => {
    const email = "daniyudistira@gmail.com";

    await globalPage.open(baseUrl);
    await globalPage.inputRegister(email);
    await globalPage.clickRegisterSelanjutnya();

    await expect(verificationPage.verificationTitle).toHaveText("Masukkan Kode Verifikasi");
  });

  it("Register dengan nomor ponsel valid - REG_007", async () => {
    const phoneNo = "85951415092";

    await globalPage.open(baseUrl);
    await globalPage.inputRegister(phoneNo);
    await globalPage.clickRegisterSelanjutnya();

    await expect(verificationPage.verificationTitle).toHaveText("Pilih Metode Verifikasi");
  });
});
