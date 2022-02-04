describe("Test scenario 3", () => {
  it("Should navigate to the Input Form & perform validations", async () => {
    browser.get(
      "https://www.lambdatest.com/selenium-playground/input-form-demo"
    );
    element(by.xpath(`//*[@id="seleniumform"]/div[6]/button`)).click();
    await element(by.id("name"))
      .getAttribute("validationMessage")
      .then(function (texts) {
        expect(texts).toBe("Please fill out this field.");
      });
    element(by.id("name")).sendKeys("Vivek Kumar");
    element(by.id("inputEmail4")).sendKeys("vivek.sen08@gmail.com");
    element(by.id("inputPassword4")).sendKeys("Test@123");
    element(by.id("company")).sendKeys("LamdaTest");
    element(by.id("websitename")).sendKeys("www.lambdatest.com");
    element(by.xpath("//*[text()='United States']")).click();
    element(by.id("inputCity")).sendKeys("Pune");
    element(by.id("inputAddress1")).sendKeys("Test address 1");
    element(by.id("inputAddress2")).sendKeys("Test address 2");
    element(by.id("inputState")).sendKeys("Maharashtra");
    element(by.id("inputZip")).sendKeys("411057");
    element(by.xpath(`//*[@id="seleniumform"]/div[6]/button`)).click();
    var successMsg = element(by.css(".success-msg.hidden")).getText();
    expect(successMsg).toBe(
      "Thanks for contacting us, we will get back to you shortly."
    );
  });
});
