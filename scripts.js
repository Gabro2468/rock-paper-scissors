const options = ["rock","paper","scissors"];

function computerChoiceRandom() {
    return options[Math.floor(Math.random() * 3)];
} 

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

//deklaracje funkcji w sposob anonimowy

rock.addEventListener('click', function() { round("rock",computerChoiceRandom()) });

paper.addEventListener('click', function() { round("paper",computerChoiceRandom()) });

scissors.addEventListener('click', function() { round("scissors",computerChoiceRandom()) });








function round(player,computer){
    console.log("Players choice : " + player)
    console.log("Computer choice : " + computer)
    switch (true){
        case (player === computer):
            alert("Draw!")
            return null;
        case (player == "rock" && computer == "scissors"):
            alert("You win! Rock dulls scissors!")
            return true;
        case (player == "rock" && computer == "paper"):
            alert("You lose! Paper surrounds rock!")
            return false;
        case (player == "paper" && computer == "rock"):
            alert("You win! Paper surrounds rock!")
            return true;
        case (player == "paper" && computer == "scissors"):
            alert("You lose! Scissors cut paper!")
            return false;
        case (player == "scissors" && computer == "paper"):
            alert("You win! Scissors cut paper!")
            return true;    
        case (player == "scissors" && computer == "rock"):
            alert("You lose! Rock dulls scissors!")
            return false;
        default:
            alert("Enter a proper option!")
            round();
    }
}

