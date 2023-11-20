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

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, or Scissors?:").toLowerCase();

    return playerChoice;
}

//Make outcome variables
const loser = "Loser.";
const cheater = "Cheater.";
const luck = "Lucky.";

//Play the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock" || 
        playerSelection == "rock" && computerSelection == "paper") {
        return loser;
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper" ||
            playerSelection == "rock" && computerSelection == "scissors") {
        return cheater;
    }
    else {
        return luck;
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;

    console.log("Hello!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------------")
        if (playRound(playerSelection, computerSelection) === "Loser.") {
            computerCount++;
        }
        else if (playRound(playerSelection, computerSelection) === "Cheater.") {
            playerCount++;
        }
    }
}