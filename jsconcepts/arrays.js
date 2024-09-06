let arr = [1, 2, 3, 4, 'testing']
console.log(arr) // Output: [1, 2, 3, 4, 5]
let arr3 = new Array()
console.log(arr3) // Output: []
let arr4 = new Array(5)
console.log(arr4) // Output: [ <5 empty items> ]

// Creating an array using square brackets
let fruits = ['Apple', 'Banana', 'Orange']

// Creating an array using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5)

console.log(fruits) // Output: ["Apple", "Banana", "Orange"]
console.log(numbers) // Output: [1, 2, 3, 4, 5]

fruits.push('Grapes')
console.log(fruits) // Output: ["Apple", "Banana", "Orange", "Grapes"]

let lastFruit = fruits.pop()
console.log(lastFruit) // Output: "Grapes"
console.log(fruits) // Output: ["Apple", "Banana", "Orange"]

// Remove the first element from an array
let firstFruit = fruits.shift()
console.log(firstFruit) // Output: "Apple"
console.log(fruits) // Output: ["Banana", "Orange"]

//Add elements to the beginning of an array
fruits.unshift('Strawberry')
console.log(fruits) // Output: ["Strawberry", "Banana", "Orange"]

console.log(fruits.length) // Output: 3

let moreFruits = ['Pineapple', 'Mango']
let allFruits = fruits.concat(moreFruits)
console.log(allFruits) // Output: ["Strawberry", "Banana", "Orange", "Pineapple", "Mango"]

let index = fruits.indexOf('Banana')
console.log(index) // Output: 1

let hasOrange = fruits.includes('Orange')
console.log(hasOrange) // Output: true

let citrusFruits = fruits.slice(1, 2) // Slice from index 1 to 2 (not inclusive)
console.log(citrusFruits) // Output: ["Banana"]
console.log(fruits) // Output: ["Strawberry", "Banana", "Orange"]

// Removing elements
let removedFruits = fruits.splice(1, 1) // Remove 1 element at index 1
console.log(removedFruits) // Output: ["Banana"]
console.log(fruits) // Output: ["Strawberry", "Orange"]

// Adding elements
fruits.splice(1, 0, 'Blueberry', 'Kiwi') // Add elements at index 1
console.log(fruits) // Output: ["Strawberry", "Blueberry", "Kiwi", "Orange"]

fruits.forEach((fruit) => {
    console.log(fruit)
})
// Output:
// Strawberry
// Blueberry
// Kiwi
// Orange

let upperCaseFruits = fruits.map((e) => e.toUpperCase())
console.log(upperCaseFruits) // Output: ["STRAWBERRY", "BLUEBERRY", "KIWI", "ORANGE"]

let longNamedFruits = fruits.filter((fruit) => fruit.length > 6)
console.log(longNamedFruits) // Output: ["Strawberry", "Blueberry"]

let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0)
console.log(totalLength) // Output: 25

let sortedFruits = fruits.sort()
console.log(sortedFruits) // Output: ["Blueberry", "Kiwi", "Orange", "Strawberry"]

let reversedFruits = fruits.reverse()
console.log(reversedFruits) // Output: ["Orange", "Kiwi", "Blueberry", "Strawberry"]

let fruitWithO = fruits.find((fruit) => fruit.includes('O'))
console.log(fruitWithO) // Output: "Orange"

let numbers1 = [1, 2, 3, 4, 5]
//[2,4,6,8,10]
//[2,4]
// Double the numbers, filter out those greater than 5, and sum the remaining numbers
let result = numbers1
    .map((num) => num * 2) //[2,4,6,8,10]
    .filter((num) => num <= 5) //[2,4]
    .reduce((sum, num) => sum + num, 0)

console.log(result) // Output: 6
