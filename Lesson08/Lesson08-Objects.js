/*
const product = {
  name: 'socks',
  price: 1090
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product);

console.log(product.notExist);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

console.log(typeof product);
*/

const productTwo = {
  name: 'shirts',
  'delivery-time': '1 day', //brackets are optional
  rating: { //nested object
    stars: 4.5,
    count: 87
  },
  fun: function functionONe(){
    console.log('A function inside object.') //saved functions inside an object is called a Method
  }
};

/*
console.log(productTwo);
console.log(productTwo.name); //dot notation - used by default
console.log(productTwo['name']) //bracket notation - used with properties that don't work with dot notation
console.log(productTwo['delivery-time'])

console.log(productTwo.rating.stars);

productTwo.fun();

console.log(typeof console);
console.log(typeof console.log);
*/

/*
//JSON stands for JavaScript Object Notation

console.log(JSON.stringify(productTwo)); //converts a JavaScript object to JSON
console.log(typeof JSON.stringify(productTwo));

const jsonString = JSON.stringify(productTwo);
console.log(JSON.parse(jsonString));
*/

let score = JSON.parse(localStorage.getItem('score')) || {
Wins: 0,
Losses: 0,
Ties: 0
};

/*
Code below is the same as the code above
if(!score){ //null is a falsy value, meaning it will behave like false
  score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
  };
}
*/

function pickComputerMove(){
  const randomNumber = Math.random();

  let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'Rock';
    }else if (randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'Paper';
    }else if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'Scissors';
    } else {
      computerMove = 'Tie';
    }

    return computerMove;
}

function usersChoice(playerMove){
  const computerMove = pickComputerMove();
  
  let result = '';

  if(playerMove === 'Scissors') {
    if(computerMove === 'Rock'){
      result = 'You lose.';
    }else if (computerMove === 'Paper'){
      result = 'You win.';
    }else if(computerMove === 'Scissors'){
      result = 'Tie.';
    }
  }
  else if(playerMove === 'Paper'){
      if(computerMove === 'Rock'){
        result = 'You win.';
      }else if (computerMove === 'Paper'){
        result = 'Tie.';
      }else if(computerMove === 'Scissors'){
        result = 'You lose.';
      }
    }
  else if(playerMove === "Rock"){
        if(computerMove === 'Rock'){
          result = 'Tie.';
        }else if (computerMove === 'Paper'){
          result = 'You lose.';
        }else if(computerMove === 'Scissors'){
          result = 'You win.';
        }
    }

    if(result === 'You win.'){
      score.Wins++;
    }else if(result == 'You lose.'){
      score.Losses++;
    }else if(result === 'Tie.'){
      score.Ties++;
    }

    //localStorage - doesn't get deleted when the page is refreshed
    localStorage.setItem('score', JSON.stringify(score));

  alert(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}
Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`);
};

//Auto-boxing
console.log('hello'.length);
console.log('hello'.toUpperCase());
console.log('hello'.toLowerCase());

//reference
const objectOne = {
  message: 'hello'
};

const objectTwo = objectOne; // copy by references

objectOne.message = 'Good job!';
console.log(objectOne);
console.log(objectTwo);

const objectThree = {
  message: 'Good job!'
};

console.log(objectThree === objectOne); //compares reference and not values
console.log(objectTwo === objectOne);
console.log(objectOne.message === objectThree.message);// comparing values

//Shortcuts for Objects
const objectFour = {
  message: 'Good job!',
  price: 799
};

// const message = objectFour.message;
//destructuring - does the same thing as line above
const { message, price } = objectFour; 
console.log(message);
console.log(price);

//Shorthand Property
const objectFive = {
 // message: message - takes whatever is inside variable and substitutes it
  message, //if the property and variable name is the same, you can just type it once
  /* method: function functionOne() {
    console.log('method');
  }*/
  method(){ //Shorthand Method for the lines above
    console.log('method');
  }
};
console.log(objectFive);
objectFive.method();
