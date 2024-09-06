const { Builder, By } = require("selenium-webdriver");

let driver;

describe("Google Search", function () {
  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");
  });

  it("should log in with valid credentials", async function () {
    let attempts = 0;
    let maxRetries = 3;
    let success = false;

    while (attempts < maxRetries && !success) {
      try {
        let searchBox = await driver.findElement(By.name("q"));
        await searchBox.sendKeys("Selenium WebDriver");
        await searchBox.submit();

        success = true; // If no error occurs, mark the attempt as successful
      } catch (error) {
        attempts++;
        if (attempts >= maxRetries) {
          throw error; // Rethrow the error after maximum retries
        }
        console.log(`Retrying login... Attempt ${attempts}`);
      }
    }
  });

  after(async () => {
    await driver.close();
  });
});
