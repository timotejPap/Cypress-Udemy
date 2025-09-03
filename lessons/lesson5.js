// Logical "AND"
//console.log(true && false)   // all values must be true to return TRUE

// Logical "OR"
// console.log(false || true)    // any value should be TRUE for the expected result to be TRUE

var ageIsMoreThan18 = false
var isUSCitizen = true

var eligibleForDrivingLicense = ageIsMoreThan18 || isUSCitizen
console.log("This customer is eligible for driving license: " + eligibleForDrivingLicense)

// Logical "NOT"
// console.log(!true)   // reverses the value  of the boolean
console.log(6 !== 10)