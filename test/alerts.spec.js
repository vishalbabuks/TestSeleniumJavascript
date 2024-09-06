const { Builder, By, until } = require('selenium-webdriver');

(async function handleAlert() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://example.com');
        
        // Trigger an alert
        await driver.findElement(By.id('trigger-alert')).click();
        
        // Switch to the alert
        let alert = await driver.switchTo().alert();
        
        // Get alert text
        let alertText = await alert.getText();
        console.log('Alert text:', alertText); 
    
        
        // Accept the alert
        await alert.accept();
        
        // Or dismiss the alert
        // await alert.dismiss();
        
    } finally {
        await driver.quit();
    }
})();   


  // Switch to the frame using its name or ID
  await driver.switchTo().frame('frameNameOrId');
        
  // Perform actions within the frame
  await driver.findElement(By.id('elementInFrame')).click();
  
  // Switch back to the main document
  await driver.switchTo().defaultContent();


  
