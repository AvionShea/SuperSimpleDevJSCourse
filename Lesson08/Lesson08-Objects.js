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

const score = {
  Wins: 0,
  Loses: 0,
  Ties: 0
};

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
      score.Loses++;
    }else if(result === 'Tie.'){
      score.Ties++;
    }

  alert(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}
Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`);
}