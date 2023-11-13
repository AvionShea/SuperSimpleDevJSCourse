//Lesson 6 Exercises
//6f - 6i

/* let coinFlip = Math.random();

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
} */
//8j.
let score = {
  wins: 0,
  loses: 0
};

//8i.
function playGame(playerChoice){
  let coinSide = (Math.random() < 0.5) ? 'Heads': 'Tails';

  console.log(playerChoice === coinSide) ? 'You win!' : 'You lose!'; 

  if(playerChoice === coinSide){
    score.wins++;
  }else{
    score.loses++;
  }
  console.log(score);
}

//8k.
