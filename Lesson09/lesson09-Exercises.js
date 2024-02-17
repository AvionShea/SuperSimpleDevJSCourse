console.log(document.querySelector('button'));

//9b
document.querySelector('.js-9b').innerText = '9b done!';

//9d
document.querySelector('#submitName').addEventListener('click', displayName);


function displayName() {
    let userName = document.querySelector('#userName').value

    document.querySelector('#nameResults').innerHTML = `Your name is: ${userName}!`
}

function enterKeyUsed(event) {
    if (event.key === 'Enter') {
        displayName();
    }
};

//Challenge Exercises
//Amazon Shipping Cost
function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
};

function calculateTotal() {
    const inputElement = document.querySelector('.js-input');
    let cost = Number(inputElement.value) * 100; //anytime we get a value from the DOM, it will be a string. We must convert to a number with Number() // multiply by 100 to convert to money

    if (cost < 4000) {
        cost = cost += 1000;
    }

    document.querySelector('.js-totalCalculation').innerText = `Total Cost: $${cost / 100}`;
};

//9h
function displayNameInDom() {
    let textDisplay = document.querySelector('#challengeExercise9h');

    document.querySelector('#textFrom9h').innerHTML = textDisplay.value;
}

//9i

function displayQuantity() {
    document.querySelector('#cartItems').innerHTML = `Cart quantity: ${cartQuantity}`;
}
let cartQuantity = 0;

document.querySelector('#cartItems').innerHTML = `Cart quantity: ${cartQuantity}`;

function updateCartQuantity(changeValue) {

    if (cartQuantity + changeValue > 10) {
        alert('The cart is full.')
    }
    else if (cartQuantity + changeValue < 0) {
        alert('Not enough items in the cart.')
    }
    else {
        cartQuantity += changeValue;
        document.querySelector('#cartItems').innerHTML = `Cart quantity: ${cartQuantity}`;
    }
}

function resetCart() {
    cartQuantity = 0;
    alert('Cart was reset.');
    document.querySelector('#cartItems').innerHTML = `Cart quantity: ${cartQuantity}`;
}

//9j
let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
    calculation += value;
    displayCalculation()
    saveCalculations();
}
function evalCalculation() {
    calculation = eval(calculation);
    displayCalculation()
}

function saveCalculations() {
    localStorage.setItem('calculation', calculation);
};

function clearScreen() {
    calculation = document.querySelector('#calculationDisplay').innerHTML = '';
    alert('Cleared.');
}

function displayCalculation() {
    document.querySelector('#calculationDisplay').innerHTML = calculation;
}