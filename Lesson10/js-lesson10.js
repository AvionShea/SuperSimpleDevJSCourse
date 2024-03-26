//YouTube Subscribe Button
function subscribe() {
    const btnElement = document.querySelector('.js-subscribe-btn');

    //innerText gets inside element without spaces
    if (btnElement.innerText === 'Subscribe') {
        btnElement.innerText = 'Subscribed';
        btnElement.classList.add('is-subscribed');
    } else {
        btnElement.innerText = 'Subscribe';
        btnElement.classList.remove('is-subscribed');
    }
};

//.classList is an oject(properties and methods) that give control of the class attribute
//.add() adds a class to an element



//Rock, Paper, Scissors
let score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

updateScoreElement();

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'Scissors';
    } else {
        computerMove = 'Tie';
    }

    return computerMove;
}

function usersChoice(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose.';
        } else if (computerMove === 'Paper') {
            result = 'You win.';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win.';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You lose.';
        }
    }
    else if (playerMove === "Rock") {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.Wins++;
    } else if (result == 'You lose.') {
        score.Losses++;
    } else if (result === 'Tie.') {
        score.Ties++;
    }

    //localStorage - doesn't get deleted when the page is refreshed
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-results').innerHTML = result;

    document.querySelector('.js-gameChoices').innerHTML = `You chose <img src="img/${playerMove}-emoji.png" class="move-icon">  Computer chose <img src="img/${computerMove}-emoji.png" class="move-icon">`;
};

function updateScoreElement() {
    document.querySelector('.js-scoreCard').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
};

function resetScore() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-results').innerHTML = '';
    document.querySelector('.js-gameChoices').innerHTML = '';
}


/*
String(25);
console.log('25' - 5);
console.log('25' + 5);
*/

//don't have to add window. JS does it automatically. Window is a built-in object that represents the browser
window //window object that represent the browser
window.document //same as document
window.console //same console.log
window.console.log('window');
window.alert //same as alert()

//Amazon Shipping Cost
function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
};

function calculateTotal() {
    const inputElement = document.querySelector('.js-input');
    let cost = Number(inputElement.value) * 100; //anytime we get a value from the DOM, it will be a string. We must convert to a number with Number()

    if (cost < 4000) {
        cost = cost += 1000;
    }

    document.querySelector('.js-totalCalculation').innerText = `Total Cost: $${cost / 100}`;
};