// creating rock paper scissors involves letting user type in a move and then comparing that move to a randomly generated move by a computer


//to get the user input, we need to prompt the user for a case insenitive move of rock, paper, or scissors, assign that to a variable. we also have to have error handling in case the user types in an incorrect move


//to get a randomly generated move from a computer, we need to create a function that selects a number randomly from 1 to three, once it has that number, assigns it to one of three variables, labeled rock, paper or scissor
function randomNumber (){
    //this returns a random integer between 1-3
     x = Math.floor(Math.random()*3)+1 ;
     console.log()
}
getComputerChoice ()
//once we have the user input and the computers move, we can compare the moves by using if, then loops
//we will then ouput feedback based on who's move wins, who's move loses, and if there is a draw

