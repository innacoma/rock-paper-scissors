//Javascript page

/*
Create computer choice:
1. create funtcion getComputerChoice
2. make it randomly choose rock, paper, or scissors
*/

function getComputerChoice() {
   let computerChoice = Math.random();

   if (computerChoice < 0.34) {
        computerChoice = "rock";
   }
    else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;

}



//Make outcome variables
const loser = "Loser.";
const cheater = "Cheater.";
const luck = "Lucky. It's a tie.";


let playerCount = 0; //sets player count to 0
let computerCount = 0; //sets computer count to 0
let tieCount = 0;   //sets tie count to 0

//Play the game
function playRound(playerSelection) {

    const computerSelection = getComputerChoice(); 
        //converts computer moveinto variable
    

    let result = ""; //starts the result as an empty string

    //logic to determine winner

    if (playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock" || 
        playerSelection == "rock" && computerSelection == "paper") {
        result = loser;
        computerCount++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper" ||
            playerSelection == "rock" && computerSelection == "scissors") {
        result = cheater;
        playerCount++;
    }
    else {
        result = luck;
        tieCount++;
    }

    
    //runs function to update the score after each move
    updateScores();

    //displays ending message after player or computer reach 5 wins

    gameOver();
}


function updateScores() {
    document.querySelector('p.js-score').innerHTML = `Wins: ${playerCount}, Losses: 
    ${computerCount}, Ties: ${tieCount}`
}


//Only allows the score to get to a max of 5
function gameOver(){

    const buttons = document.getElementsByClassName("button");

    //displays game over message
    //creates a play again button when 5 wins is reached

    const playAgain = document.createElement('button');
    playAgain.textContent = "Play Again";

    if (computerCount === 5){
        document.querySelector('p.js-end-msg').innerHTML = `Game Over: You 
    suck, Computer Wins. ${playerCount} - 
    ${computerCount}`; //if lost 5 round score
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true; //disables buttons
      }
      document.getElementById("play-again").appendChild(playAgain);
      playAgain.addEventListener("click", () => {
        console.log("play again");
        startOver();
        playAgain.remove(); //removes play again button after it is pressed
      })
    }
    else if (playerCount === 5){
        document.querySelector('p.js-end-msg').innerHTML = `Game Over: 
        Whatever, You Win. ${playerCount} - 
    ${computerCount}`; //if won 5 round score
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
      document.getElementById("play-again").appendChild(playAgain);
      playAgain.addEventListener("click", () => {
        console.log("play again");
        startOver();
        playAgain.remove();
      })
    }
}

//resets game after play again button is clicked

function startOver() {
    const buttons = document.getElementsByClassName("button");

    //enables buttons

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
      }
    
    playerCount = 0; 
    computerCount = 0; 
    tieCount = 0; 

    document.querySelector('p.js-score').innerHTML = `Wins: ${0}, Losses: ${0}, Ties: ${0}`

    document.querySelector('p.js-end-msg').innerHTML = "";

}


