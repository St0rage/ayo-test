describe("Jenkins Test", () => {
  it("Open Sauce Demo Page", async () => {
    await browser.url("https://www.saucedemo.com/");

    await expect($(".login_logo")).toBeDisplayed();
  });
});
