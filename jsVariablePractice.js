let cartQuantity = 0;
/*
let variableOne = 3;
console.log(variableOne);

const calculation = 2 + 2;
console.log(calculation);
console.log(calculation + 2);

const result = calculation + 2;
console.log(result);

const message = 'hello';
console.log(message);

variableOne = 5;
console.log(variableOne);

variableOne = variableOne + 1;
console.log(variableOne)

const variableTwo = 3;

var variableThree = 3;

console.log(typeof variableTwo);

console.log(typeof message);
*/

//Lesson 5 Exercises - Variables

//5a. Create a variable called 'name', and save your name in this variable.
  const name = 'Avion'

//5b. Display the message 'My name is:' in the console.
  console.log(`My name is ${name}.`)

//5c. At a restaurant, you order 1 coffee($5), 2 bagels($3 each), and 1 soup($9). Calculate the coast and save it in a variable called 'cost'.
  let cost = (5 + (2*3) + 9)

//5d. Continuing from 5c, display 'Cost of food:' in the console.
  console.log(`Cost of food: $${cost}.`)

//5e. Let's say the restaurant charges a 10% tax. Using the 'cost' variable from 5c, calculate the tax, and save the results in a variable.
  let foodTaxes = cost * 0.01

//5f. Continuing from 5e, display 'Tax (10%):' in the console.
  console.log(`Tax (10%): $${foodTaxes}`)

//5g. Continuing from 5f, calculate the total (cost + tax), save it in a variable called 'totalCost', and display the message 'Total cost:' in the console.
  let totalCost = cost + foodTaxes
  console.log(`Total cost: $${totalCost}.`)