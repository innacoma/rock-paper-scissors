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

//Gets player choice input
/* function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, or Scissors?:").toLowerCase();

    return playerChoice;
} */



//Make outcome variables
const loser = "Loser.";
const cheater = "Cheater.";
const luck = "Lucky. It's a tie.";

//Play the game
function playRound(playerSelection) {

    const computerSelection = getComputerChoice();

    let result = "";

    if (playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock" || 
        playerSelection == "rock" && computerSelection == "paper") {
        result = loser;
    }
    else if (playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper" ||
            playerSelection == "rock" && computerSelection == "scissors") {
        result = cheater;
    }
    else {
        result = luck;
    }

    alert(result);
}

//Plays 5 games, then displays result of 5 game series
/* function game() {
    let playerCount = 0; //sets player count to 0
    let computerCount = 0; //sets computer count to 0

    console.log("Hello!")
    for (let i = 0; i < 5; i++) { //starts i at and while it is less than 5 it will increase the count
        //const playerSelection = getPlayerChoice(); //assigns player choice function to a variable
        const computerSelection = getComputerChoice(); //assigns computer choice function to a variable
        console.log(playRound(playerSelection, computerSelection)); //runs playRound function and displays result
        console.log("----------------") //separator
        if (playRound(playerSelection, computerSelection) === "Loser.") {
            computerCount++; //if computer win, adds to computerCount
        }
        else if (playRound(playerSelection, computerSelection) === "Cheater.") {
            playerCount++; //if player win, adds to playerCount
        }
    }
    console.log("Game Over:") //display game over
    if (playerCount < computerCount){
        console.log("You suck, Computer Wins. " + playerCount + "-" + computerCount); //if lost 5 round score
    }
    else if (playerCount > computerCount){
        console.log("Whatever, You Win. " + playerCount + "-" + computerCount); //if won 5 round score
    }
    else {
        console.log("WTF How did you tie?!") //if tie 5 round score
    }
} */