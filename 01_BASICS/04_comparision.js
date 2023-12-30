//  basic comparision
console.log(2 > 1)
console.log(2 != 1)
console.log(2 == 1)
console.log(2 < 1)
console.log(2 >= 1)

// special comparision
console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// the reason is that an equality check == and comparisons check > < >= <= work differently
// comparisions convert null to a number, treating it as 0
// that's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

//  === checks both value and datatype
console.log("2" === 2) // false