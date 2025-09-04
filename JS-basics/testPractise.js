/**
 * Requirements:

Create two initial variables with the names "familySize" and "plannedDistanceToDrive". Assign initial values to those variables, for example, 2 for "familySize" and 100 for "plannedDistanceToDrive" Create a new function with the name "recommendedCar" and pass created variables as arguments of the function.
Write a logic of the function based on these conditions:

if familySize is four or less and the planned distance to drive is less than 200 miles, the function should return "Tesla"

if familySize is four or less and the planned distance to drive is 200 or more, the function should return "Toyota Camry"

if familySize is more than four, the function should return "Minivan"
 */

let familySize = 5;
let plannedDistanceToDrive = 250;

function recommendedCar(familySize, plannedDistanceToDrive) {
    if (familySize <= 4 && plannedDistanceToDrive < 200) {
        return "Tesla"
    }

    else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
        return "Toyota Camry"
    }

    else {
        return "Minivan"
    }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));