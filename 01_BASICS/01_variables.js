const accountId = 123456 // constant variable
let accountEmail = "sandesh@gmail.com" // support block scope
var accountPassword = "1234" // do not support block scope
accountCity = "Kathmandu" // can be define this way but not recommended
let accountState // undefined when used without initialized

// accountId = 3 // not allowed
accountEmail = "san@gmail.com"
accountPassword = "34124123"
accountCity = "Lalitpur"

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/**
 * prefer not to use var because of issue in block scope and functional scope
 */
