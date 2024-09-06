const { Builder, By,Key } = require("selenium-webdriver");// before es6 
const { Select } = require('selenium-webdriver/lib/until');


let driver;


describe("Google Search", function () {

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.google.com");
    let webele= await driver.findElement(By.id("Test"));
    let textfoelement=webele.getText();



  });
  it("click actions and working with webelements", async function () {

    let webele= await driver.findElement(By.id("Test"));
    webele.click();

    let element7 = await driver.findElement(By.id('hover-me'));
    let actions7 = driver.actions();
    await actions7.move({ origin: element }).perform();

    await driver.get('http://example.com');
    await driver.findElement(By.id('click-me')).click();

    let element6 = await driver.findElement(By.id('double-click-me'));
    let actions = driver.actions();
    await actions.doubleClick(element6).perform();

    let input = await driver.findElement(By.id('text-field'));
    await input.sendKeys('Hello, World!');

    let input3 = await driver.findElement(By.id('text-field'));
    await input3.sendKeys(Key.ENTER);

    let source = await driver.findElement(By.id('drag-me'));
        let target = await driver.findElement(By.id('drop-here'));
        let actions2 = driver.actions();
        await actions2.dragAndDrop(source, target).perform();

    let element = await driver.findElement(By.id('css-element'));
    let color = await element.getCssValue('color');

    let element2 = await driver.findElement(By.id('attribute-element'));
    let attributeValue = await element2.getAttribute('class');
    console.log('Element attribute value:', attributeValue);

    let element3 = await driver.findElement(By.id('text-element'));
        let text = await element3.getText();
        console.log('Element text:', text);

        let element4 = await driver.findElement(By.id('check-me'));
        let isDisplayed = await element4.isDisplayed();
        console.log('Element is displayed:', isDisplayed);

        let element5 = await driver.findElement(By.id('check-me'));
        let isEnabled = await element5.isEnabled();
        console.log('Element is enabled:', isEnabled);

        let dropdown = await driver.findElement(By.id('dropdown'));
        let s = new Select(dropdown);
        await s.selectByVisibleText('Option 1');
       
  });

  after(async () => {
    await driver.close();
  });
});











