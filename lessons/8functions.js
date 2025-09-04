// Declarative function
// function can be called before its declaration

// helloOne()

// function helloOne(){
//     console.log("Hello One");
// }

// helloOne()

// // Anonymous function
// // function can only be called after its declaration
// var helloTwo = function() {
//     console.log("Hello Two");
// }

// helloTwo()

//ES6 function syntax or Arrow function
// var helloThree = () => {
//     console.log("Hello Three");
// }

// helloThree()

// // Function with arguments
// function printName(name, surname, age) {
//     console.log("Hello, my name is " + name + " " + surname + " and I am " + age + " years old.");
// }

// printName("John", "Doe", 30)


// Function with return value
function multiplyByTwo(number) {
    var result = number * 2;
    return result;
}

var output = multiplyByTwo(5);
console.log(output); // 10


// import function from another file
import { printAge } from "../helpers/printHelper.js";
printAge(25);

// import entire module
import * as helper from "../helpers/printHelper.js";
helper.printAge(30);