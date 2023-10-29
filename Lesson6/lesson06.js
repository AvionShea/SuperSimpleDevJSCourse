/* const age = 15;

if (age >= 16) {
  console.log('You can drive!');
} else if (age >= 14) {
  console.log('Almost there!')
} else {
  console.log('You can not drive!');
}
*/

/*
if (1) {
  console.log('truthy');
}

const cartQuantity = 5;

if (cartQuantity){
  console.log('Cart has products')
}

console.log(!0);

console.log( 'text' / 5); //NaN

let variableOne;
console.log(variableOne); //undefined - only can use with let, if want to use with const, you'll need to spell it out.
*/

//ternary operator
const results = 0 ? 'truthy' : 'falsy';
console.log(results);

//Guard Operator && - short circuit evaluation - stops early
false && console.log('hello');

const message = false && 'hello';
console.log(message);
const messageTwo = 29 && 'hi!';
console.log(messageTwo);

//Default Operator || - can be used to set a default value
const currency = undefined || 'USD';
console.log(currency);