// Concatination and Interpolation
var itemName = "Table";
var price = 60;
var messageToPrint =
  "The price for your " + itemName + " is " + price + " Euros."; // Concatination
var messageToPrint2 = `The price for your ${itemName} is ${price} Euros.`; // Interpolation
console.log(messageToPrint);
console.log(messageToPrint2);
