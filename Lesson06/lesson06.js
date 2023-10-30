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

/*
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
*/


//Lesson 6 Exercises

//6a - 6c
const hour = 18;

const name = 'Avion';

if(hour >= 6 && hour <= 12){
  console.log(`Good morning, ${name}!`)
}else if (hour >= 13 && hour <= 17){
  console.log(`Good afternoon, ${name}!`)
}else{
  console.log(`Good night, ${name}!`)
}

//6d-6e
const personAge = 29;
const isHoliday = true;

if((personAge <= 6|| personAge >= 65) && !isHoliday){
  console.log('Discount!');
}else{
  console.log('No Discount!');
}



//6f - 6i

let coinFlip = Math.random();

if (coinFlip < 0.5){
  flipResults = 'Heads';
}else{
  flipResults = 'Tails';
}

let personGuess = 'Heads';

if(personGuess === flipResults){
  console.log('You Win!');
}else{
  console.log('You Lose!');
}


//6j.

const discountEligible = ((personAge <= 6 || 65  <= personAge) && !isHoliday) ? 'Discount!' : 'No Discount!';
console.log(discountEligible);

let coinSide = (Math.random() < 0.5) ? 'Heads' : 'Tails';
console.log(coinSide);


let coinFlipGame = (personGuess === coinSide) ? console.log('You Win!') : console.log('You Lose!');

//Challenge Exercise
//6k.
if (cartQuantity + 1 > 10) {
  alert('The cart is full');
} else {
  cartQuantity++;
  console.log(`Cart quantity: ${cartQuantity}`);
}
if (cartQuantity + 2 > 10) {
  alert('The cart is full');
} else {
  cartQuantity+=2;
  console.log(`Cart quantity: ${cartQuantity}`);
}
if (cartQuantity + 3 > 10) {
  alert('The cart is full');
} else {
  cartQuantity+=3;
  console.log(`Cart quantity: ${cartQuantity}`);
}
if (cartQuantity + 4 > 10) {
  alert('The cart is full');
} else {
  cartQuantity+=4;
  console.log(`Cart quantity: ${cartQuantity}`);
}
if (cartQuantity + 5 > 10) {
  alert('The cart is full');
} else {
  cartQuantity+=5;
  console.log(`Cart quantity: ${cartQuantity}`);
}

//6l
if (cartQuantity - 1 < 0) {
  alert('Not enough items in the cart');
} else {
  cartQuantity--;
  console.log(`Cart quantity: ${cartQuantity}`);
}

if (cartQuantity - 2 < 0) {
  alert('Not enough items in the cart');
} else {
  cartQuantity-=2;
  console.log(`Cart quantity: ${cartQuantity}`);
}
if (cartQuantity - 3 < 0) {
  alert('Not enough items in the cart');
} else {
  cartQuantity-=3;
  console.log(`Cart quantity: ${cartQuantity}`);
}