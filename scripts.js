const options = ["rock","paper","scissors","rock","paper","scissors"];

function computerChoiceRandom() {
    return options[Math.floor(Math.random() * 6)];
} 

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const score = document.querySelector('#score');
const buttons = document.querySelectorAll('.button')

let playerChoice = ""
let playerScore = 0
let computerScore = 0

rock.addEventListener('click', function() {
    playerChoice = "rock" });

paper.addEventListener('click', function() {
    playerChoice = "paper" });

scissors.addEventListener('click', function() {
    playerChoice = "scissors" });

buttons.forEach(function(btn) {
    btn.addEventListener('click',function() {
        let computerChoice = computerChoiceRandom();
        let result = round(playerChoice,computerChoice);
        if (result==true){
            playerScore += 1;
        }
        else if(result==false){
            computerScore += 1;
        }
        else{
            console.log("Draw!")
        }
        
        score.innerHTML = "Player " + playerScore + " : " + computerScore + " Computer"

        switch (true){
            case(playerScore==5):
                score.innerHTML = "CONGRATS!! YOU HAVE WON " + playerScore + " to " + computerScore
                playerScore = 0;
                computerScore = 0;

            case(computerScore==5):
                score.innerHTML = "Sorry! You have lost " + playerScore + " to " + computerScore
                playerScore = 0;
                computerScore = 0;
                
        }
    })
})


function round(player,computer){
    console.log("Players choice : " + player)
    console.log("Computer choice : " + computer)
    switch (true){
        case (player === computer):
            console.log("Draw!")
            return null;
        case (player == "rock" && computer == "scissors"):
            console.log("You win! Rock dulls scissors!")
            return true;
        case (player == "rock" && computer == "paper"):
            console.log("You lose! Paper surrounds rock!")
            return false;
        case (player == "paper" && computer == "rock"):
            console.log("You win! Paper surrounds rock!")
            return true;
        case (player == "paper" && computer == "scissors"):
            console.log("You lose! Scissors cut paper!")
            return false;
        case (player == "scissors" && computer == "paper"):
            console.log("You win! Scissors cut paper!")
            return true;    
        case (player == "scissors" && computer == "rock"):
            console.log("You lose! Rock dulls scissors!")
            return false;
        default:
            console.log("Error")
    }
}

