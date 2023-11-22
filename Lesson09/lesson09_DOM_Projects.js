//Lesson 09 DOM Projects JS

//YouTube Subscribe Button
function subscribe(){
  const btnElement = document.querySelector('.js-subscribe-btn');

      //innerText gets inside element without spaces
      if (btnElement.innerText === 'Subscribe') {
          btnElement.innerText = 'Subscribed';
      } else {
          btnElement.innerText = 'Subscribe';
      }
};



//Rock, Paper, Scissors
let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
  };

  updateScoreElement();
  
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

      updateScoreElement();
    
  
    alert(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}
  Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`);
  };

  function updateScoreElement(){
    document.querySelector('.js-scoreCard')
      .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  };