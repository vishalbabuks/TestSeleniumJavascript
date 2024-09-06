const { Builder, By, Key, until } = require('selenium-webdriver')

function main() {
    let driver = new Builder().forBrowser('firefox').build()

    driver
        .get('http://www.google.com/ncr')
        .then(function () {
            return driver.findElement(By.name('q'))
        })
        .then(function (element) {
            return element.sendKeys('webdriver', Key.RETURN)
        })
        .then(function () {
            return driver.wait(until.titleIs('webdriver - Google Search'), 1000)
        })
        .then(function () {
            return driver.quit()
        })
        .catch(function (error) {
            console.error('An error occurred:', error)
            return driver.quit()
        })
}

main()
