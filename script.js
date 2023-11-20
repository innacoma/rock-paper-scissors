//Javascript page


/*
Create computer choice:
1. create funtcion getComputerChoice
2. make it randomly choose rock, paper, or scissors
*/

function getComputerChoice() {
   let computerChoice = math.random();

   if (computerChoice < 0.34) {
        computerChoice = "rock";
   }
    elseif (computerChoice <= 0.67) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
}
