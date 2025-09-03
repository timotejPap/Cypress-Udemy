// Concatination and Interpolation

var itemName = "Desk";
var price = 100;
var messageToPrint =
  "The price for your " + itemName + " is " + price + " Euros."; // Concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} Euros.`; // Interpolation
console.log(messageToPrint);
console.log(messageToPrint2);
