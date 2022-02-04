describe("Test scenario 2", () => {
  it("Should drag slider and perform validations", async () => {
    const actualValue = "95";
    browser.get("https://www.lambdatest.com/selenium-playground/");
    element(by.xpath(`//a[text()='Drag & Drop Sliders']`)).click();
    var sliderBar = element(by.css(".sp__range.sp__range-success"));
    browser.actions().dragAndDrop(sliderBar, { x: 100, y: 0 }).perform();
    const expectedValue = await element(
      by.xpath(`//*[@id="rangeSuccess"]`)
    ).getText();
    expect(expectedValue).toBe(actualValue);
  });
});
