const { Builder, By } = require("selenium-webdriver");// before es6 


let driver;


describe("Google Search", function () {

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");


  });
  it("should open Google and search for something", async function () {
    let searchBox = await driver.findElement(By.name("q"));
    await searchBox.sendKeys("Selenium WebDriver");
    await searchBox.submit();
  });

  after(async () => {
    await driver.close();
  });
});











