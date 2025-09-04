// Loops

// console.log("Hello World!")

// for (statement1; statement2; statement3) {
//     // code block to be executed
// }


// for loop (for i loop)
for (let i=0; i<5; i++) {
    console.log("Hello World!" + i)
}

var cars = ["BMW", "Volvo", "Saab", "Ford"]
// for of loop
for (let car of cars) {
    console.log(car)
    if (car == "Saab") {
        console.log("Saab is found!")
        break
    }
}

// ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
});