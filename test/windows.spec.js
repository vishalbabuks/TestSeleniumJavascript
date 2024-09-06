const { Builder, By, until } = require('selenium-webdriver');

(async function handleMultipleWindows() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://rahulshettyacademy.com/AutomationPractice/');
        
        // Open a new window
        await driver.findElement(By.id('open-new-window')).click();
        
        // Get window handles
        let handles = await driver.getAllWindowHandles();
        
        // Switch to the new window
        let newWindowHandle = handles[1]; // Assuming new window is the second handle
        await driver.switchTo().window(newWindowHandle);
        
        // Perform actions in the new window
        console.log('Current window URL:', await driver.getCurrentUrl());
        
        // Close the new window
        await driver.close();
        
        // Switch back to the original window
        await driver.switchTo().window(handles[0]);
        
    } finally {
        await driver.quit();
    }
})();
