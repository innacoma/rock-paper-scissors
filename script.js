//Javascript page

//Ask for user input
const playerSelection = prompt("Rock, Paper, or Scissors?: ");

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

/*
1. 
*/
