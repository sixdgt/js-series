let score = 33
let price = "1200"

console.log(typeof score)
console.log(typeof(score))

console.log(typeof(price))

// number conversion 
let valueInNumber = Number(price)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
// js can convert from one datatype into another but we need to be careful while
// printing or using the value
// eg
let markedPrice = "1233 Rs."
let convertedMarkedPrice = Number(markedPrice) // markedPrice can be easily convert

console.log( typeof markedPrice) // here markedPrice is a string
console.log(typeof convertedMarkedPrice) // here price converted to number with value NaN

// when we print the converted data we get NaN
console.log(markedPrice)
console.log(convertedMarkedPrice)

// in case of null
let discount = null
let discountPrice = Number(discount) // converted to Number with value 0

console.log(discount)
console.log(discountPrice) 

// in case of undefined
let vat = undefined
let vatAmount = Number(vat) // converted to Number with value NaN

console.log(vat)
console.log(vatAmount) 

// in case of boolean
let isRemoved = true
let isActive = Number(isRemoved) // converted to Number with value 1 or 0

console.log(isRemoved)
console.log(isActive) 

// conversion number to boolean
let isLoggedIn = 1 // 1 => true and 0 => false
let loginStatus = Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(loginStatus)

// string conversion
let num = 1
let val = String(num)

console.log(val)
console.log(typeof val)

// ******************* Operations *********************
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

// not recommended but is possible

console.log(true)
console.log(+true)
console.log(+"")

// assignment operator trick 
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++ // postfix increment 
console.log(gameCounter)
++gameCounter // preffix increment
console.log(gameCounter)

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

