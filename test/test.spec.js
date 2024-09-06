const { Builder, By } = require("selenium-webdriver");// before es6 


let driver;


describe("Google Search", function () {

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.airbnb.co.in/");
    let windowPosition = await driver.manage().window().getPosition();


  });
  it("should open Google and search for something", async function () {
    // Get window position
    let windowPosition = await driver.manage().window().getPosition();
    console.log(windowPosition);
  });

  after(async () => {
    await driver.close();
  });
});











