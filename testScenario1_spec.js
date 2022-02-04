describe("Test scenario 1", () => {
  it("Should navigate to website and validate user inputs", () => {
    browser.get("https://www.lambdatest.com/selenium-playground/");
    browser.getCurrentUrl().then((url) => {
      expect(url).toBe("https://www.lambdatest.com/selenium-playground/");
    });
    element(by.xpath(`//a[text()='Simple Form Demo']`)).click();
    browser.getCurrentUrl().then((url) => {
      expect(url).toContain("simple-form-demo");
    });
    var inputValue = "Welcome to LambdaTest";
    element(by.id("user-message")).sendKeys(inputValue);
    element(by.id("showInput")).click();
   var saveEnteredValue= element(by.id("message")).getText();
   expect(saveEnteredValue).toBe(inputValue);
  });
});
