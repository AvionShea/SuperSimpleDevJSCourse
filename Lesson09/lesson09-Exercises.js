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
        cost = cost += 10;
    }

    document.querySelector('.js-totalCalculation').innerText = `Total Cost: $${cost / 100}`;
};

//9h
function displayNameInDom() {
    let textDisplay = document.querySelector('#challengeExercise9h');

    document.querySelector('#textFrom9h').innerHTML = textDisplay.value;
}