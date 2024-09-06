const { Builder } = require('selenium-webdriver')

function getDriver(browserName) {
    let driver

    switch (browserName.toLowerCase()) {
        case 'chrome':
            driver = new Builder().forBrowser('chrome').build()
            break

        case 'firefox':
            driver = new Builder().forBrowser('firefox').build()
            break

        case 'edge':
            driver = new Builder().forBrowser('MicrosoftEdge').build()
            break

        case 'safari':
            driver = new Builder().forBrowser('safari').build()
            break

        default:
            console.error(`Unsupported browser: ${browserName}`)
            throw new Error(`Unsupported browser: ${browserName}`)
    }

    return driver
}

// Function to select a web element based on the selector type
function getElement(selectorType, selectorValue) {
    let element

    switch (selectorType.toLowerCase()) {
        case 'id':
            // Selecting element by ID
            element = document.getElementById(selectorValue)
            console.log(`Selected element by ID: ${selectorValue}`)
            break

        case 'class':
            // Selecting element by class name (returns the first matching element)
            element = document.getElementsByClassName(selectorValue)[0]
            console.log(`Selected element by class: ${selectorValue}`)
            break

        case 'name':
            // Selecting element by name attribute (returns the first matching element)
            element = document.getElementsByName(selectorValue)[0]
            console.log(`Selected element by name: ${selectorValue}`)
            break

        case 'css':
            // Selecting element by CSS selector
            element = document.querySelector(selectorValue)
            console.log(`Selected element by CSS selector: ${selectorValue}`)
            break

        case 'xpath':
            // Selecting element by XPath (returns the first matching element)
            let xpathResult = document.evaluate(
                selectorValue,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            )
            element = xpathResult.singleNodeValue
            console.log(`Selected element by XPath: ${selectorValue}`)
            break

        default:
            console.log(
                "Invalid selector type. Please use 'id', 'class', 'name', 'css', or 'xpath'."
            )
    }

    return element
}

// Example usage:

// Selecting an element by ID
let elementById = getElement('id', 'exampleId')

// Selecting an element by class name
let elementByClass = getElement('class', 'exampleClass')

// Selecting an element by name attribute
let elementByName = getElement('name', 'exampleName')

// Selecting an element by CSS selector
let elementByCss = getElement('css', '.exampleClass')

// Selecting an element by XPath
let elementByXpath = getElement('xpath', '//div[@class="exampleClass"]')
