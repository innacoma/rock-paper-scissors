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

//Ask for user input
const playerSelection = prompt.toLowerCase("Rock, Paper, or Scissors?: ");

//Get computer choice
const computerSelection = getComputerChoice();

//Play the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper.";
        }
        else {
            return "You Win! Paper beats Rock.";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors.";
        }
        else {
            return "You Win! Scissors beats Paper.";
        }
    }
    else {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock."
        }
        else {
            return  "You Win! Rock beats Scissors."
        }
    }
}