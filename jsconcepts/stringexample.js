let str = 'Hello, World!'
console.log(str.length) // Output: 13

console.log(str.charAt(0)) // Output: "H"
console.log(str.charCodeAt(0)) // Output: 72
let str1 = 'Hello'
let str2 = 'World'
console.log(str1.concat(', ', str2, '!')) // Output: "Hello, World!"
console.log(str.includes('World')) // Output: true
console.log(str.indexOf('World')) // Output: 7
console.log(str.toUpperCase()) // Output: "HELLO, WORLD!"
console.log(str.toLowerCase()) // Output: "hello, world!"
console.log(str.slice(0, 5)) // Output: "Hello"
let words = str.split('|')
console.log(words) // Output: ["Hello", "World!"]
let str5 = '  Hello, World!  '
console.log(str5.trim()) // Output: "Hello, World!"
