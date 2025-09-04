// object
var customer = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  cars: ["BMW", "Škoda", "Mercedes"],
};

// dot notation
customer.firstName = "Daniela";
// bracket notation
customer["age"] = 31;
console.log(customer["age"]);
console.log(
  `${customer.firstName} ${customer.lastName} is ${customer.age} years old.`
);

// arrays
var car = ["BMW", "Audi", "Mercedes"];
car[1] = "Toyota";
console.log(car[1]);
console.log(customer.cars[0]);
console.log(
  "My car is a " + customer.cars[1] + " and my wife is " + customer.firstName
);
