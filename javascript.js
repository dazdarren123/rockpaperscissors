// creating rock paper scissors involves letting user type in a move and then comparing that move to a randomly generated move by a computer


//once we have the user input and the computers move, we can compare the moves by using if, then loops

//we will then print a statement based on who's move wins, who's move loses, and if there is a draw, utilizing the variables associated with each move, concatenating with the result

function playRound(computerSelection, playerSelection){
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    if (computerSelection === "Rock" && playerSelection === "Rock"){
        return("Draw");
    // if computer = rock and player = paper, player wins
    } else if (computerSelection === "Rock" && playerSelection === "Paper"){
        playerScore++;
        return("You Win! "+playerSelection + " Beats "+ computerSelection);
    // if computer = rock and player = scissors, computer wins  
    } else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        computerScore++;
        return("You Lose! "+playerSelection + " Loses to  "+ computerSelection);
    // if computer = paper and player = paper, draw
    } else if (computerSelection === "Paper" && playerSelection === "Paper"){
        return("Draw");
    // if computer = paper and player = scissors, player wins
    } else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        playerScore++;
        return("You Win! "+playerSelection + " Beats  "+ computerSelection)
    // if computer = paper and player = rock, computer wins
    } else if (computerSelection === "Paper" && playerSelection === "Rock"){
        computerScore++;
        return("You Lose! "+playerSelection + " Loses to  "+ computerSelection)
    // if computer = scissors and player = paper, computer wins
    } else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        computerScore++;
        return("You Lose! "+playerSelection + " Loses to  "+ computerSelection);
    // if computer = scissors and player = scissors, draw
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors"){
        return("Draw")
    // if computer = scissors and player = rock, player wins
    } else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        playerScore++;
        return("You Win! "+playerSelection + " Beats  "+ computerSelection)
    }
   }

function game (){
    playerScore = 0;
    computerScore = 0;
    matchCount = 0;
    while (matchCount < 5) {
        console.log(playRound());
        console.log(playerScore);
        console.log(computerScore);
        matchCount++;
    }
    if (playerScore > computerScore){
        return( "Player wins! The results are player: " + playerScore + " and computer: "+ computerScore);
    } else if (playerScore < computerScore){
        return( "Computer wins! The results are player: " + playerScore + " and computer: "+ computerScore);
    } else {
        return ("Draw! The results are player: " +playerScore + " and computer: "+ computerScore);
    }
}

console.log(game())


// ****** COMPUTER SELECTION SECTION BEGIN *****
//to get a randomly generated move from a computer, we need to create a function that selects a number randomly from 1 to three
function randomNumber (){
    //this returns a random integer between 1-3
     x = Math.floor(Math.random()*3)+1 ;
     return x;
     
}
// once it has that number, assigns it to one of three variables, labeled rock, paper or scissors
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

// create a new function that plays a 5 round game that keep scores and reports a winner or loser using the previous playRound function
// the function should display the results of each round, and the winner of the entire game at the end
// i need a function that keeps track of the results of each time the function playRound is called
// i need to set a variable for player score
// i need to set a variable for computer score
// if in the function Playround, the computer wins, i need to increment and store the variable for computer score
// if in the function playround, the player wins, i need to increment and store the variable for player score
// i need a function that prints the total score and results at the end of the game
