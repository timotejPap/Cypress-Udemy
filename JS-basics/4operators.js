// Relational or Comparison Operators

// > - Greater than
// < - Less than
// >= - Greater than or equal to
// <= - Less than or equal to

var result1 = 5 > 3; // true
console.log(result1);

var result2 = 5 < 3; // false
console.log(result2);

var result3 = 5 >= 5; // true
console.log(result3);

var result4 = 5 <= 4; // false
console.log(result4);

// equality operators

var x = 10; // number
console.log(x == "10"); // true (loose comparison, type coercion)
console.log(x === "10"); // false (strict comparison, no type coercion) here '===' checks both value and type
