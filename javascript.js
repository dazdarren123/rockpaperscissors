// creating rock paper scissors involves letting user type in a move and then comparing that move to a randomly generated move by a computer


//once we have the user input and the computers move, we can compare the moves by using if, then loops
function playRound(){
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log(computerSelection);
    console.log(playerSelection);
   }

playRound();
//we will then print a statement based on who's move wins, who's move loses, and if there is a draw, utilizing the variables associated with each move, concatenating with the result


// ****** COMPUTER SELECTION SECTION BEGIN *****
//to get a randomly generated move from a computer, we need to create a function that selects a number randomly from 1 to three
function randomNumber (){
    //this returns a random integer between 1-3
     x = Math.floor(Math.random()*3)+1 ;
     return x;
     
}
// once it has that number, assigns it to one of three variables, labeled rock, paper or scissor
function getComputerChoice (){
  let computerSelection = randomNumber();
  if (computerSelection === 1){
    computerSelection = "Rock";
  } else if (computerSelection === 2){
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
  return(computerSelection);
}
// ****** COMPUTER SELECTION SECTION END *****

// ****** PLAYER SELECTION SECTION BEGIN *****
//to get the user input, we need to prompt the user for a case insenitive move of rock, paper, or scissors, assign that to a variable. we also have to have error handling in case the user types in an incorrect move. we also need to make sure that the case is solved
function getPlayerChoice(){
    let playerSelection = prompt("Please enter a move","Rock, Paper, or Scissors.");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
    if (playerSelection == "Rock"||playerSelection =="Paper"||playerSelection =="Scissors"){
        return(playerSelection);
    } else {
    return("Please enter one of the following moves: Rock, Paper, or Scissors");
    }
}

// ****** PLAYER SELECTION SECTION END *****