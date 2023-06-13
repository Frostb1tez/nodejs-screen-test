const Calculator = require("./calculator");

const calculator = new Calculator();
const order = {
  orange: 2,
  pink: 2,
};
const hasMemberCard = true;
const totalPrice = calculator.calculatePrice(order, hasMemberCard);
console.log("Total Price:", totalPrice);
