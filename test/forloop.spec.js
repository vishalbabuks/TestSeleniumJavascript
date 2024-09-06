const { Builder, By } = require("selenium-webdriver");

let driver;


describe("Google Search", function () {

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");
  });
  it("should open Google and search for something", async function () {
    await driver.get('https://rahulshettyacademy.com/AutomationPractice/');  // Replace with the URL you want to test
    // Find all anchor tags on the page
    let listofoptions = await driver.findElements(By.xpath('//li[@class="test"]'));
    

    // Iterate through the list of anchor tags and print their href attributes
    for (let option of listofoptions) {
        let textofelement = await anchor.option.gettext();
        if(textofelement.contains("brazil")){
          option.click();
          break;
        }
    }
  });

  after(async () => {
    await driver.close();
  });
});

