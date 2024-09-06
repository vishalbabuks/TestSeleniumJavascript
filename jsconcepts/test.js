// console.log("testing")

// // let var and const

// console.log(a);
// var a=10;

// var a=8;

// a=7;

// console.log(a)

const obj = {
    name: 'john',
    age: 20,
    isEmployee: true,
}

const jsonstring = JSON.stringify(obj)
console.log(jsonstring)

const jsonstring2 = '{"name":"john","age":20,"isEmployee":true}'
const obj1 = JSON.parse(jsonstring2)
console.log(obj1)

driver.manage().setTimeouts({ implicit: 10000 }) // 10 seconds

let element = await driver.wait(until.elementLocated(By.id('elementId')), 10000)
await driver.wait(until.elementIsVisible(element), 10000)

const { expect } = require('chai')

// Assert that the element is displayed
let isDisplayed = await driver.findElement(By.id('elementId')).isDisplayed()
expect(isDisplayed).to.be.true

// Assert that the element contains the expected text
let elementText = await driver.findElement(By.id('elementId')).getText()
expect(elementText).to.equal('Expected Text')
