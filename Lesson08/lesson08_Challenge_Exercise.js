//Lesson 6 Exercises
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


let coinSide = (Math.random() < 0.5) ? 'Heads' : 'Tails';
console.log(coinSide);


let coinFlipGame = (personGuess === coinSide) ? console.log('You Win!') : console.log('You Lose!');