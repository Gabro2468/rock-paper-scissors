const options = ["rock","paper","scissors"];

function computerChoiceRandom() {
    return options[Math.floor(Math.random() * 3)];
} 

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

function game(){
    let score = [0,0];
    while(score[0] <= 5 || score[1] <= 5){
        playerChoice = prompt("Choose one of the three options(rock,paper,scissors): ")
        playerChoice = playerChoice.toLowerCase();
        computerChoice = computerChoiceRandom();
        let outcome = round(playerChoice,computerChoice);
        if(outcome == true){
            score[0] += 1;
        }
        else if(outcome == false){
            score[1] += 1;
        }
        else {
            console.log("Draw")
        }
        alert("Player " + score[0] +" : " + score[1] + " Computer")
    }
    if (score[0] > score[1]){
        alert("YOU WON! Congratulations!")
    }
    else if(score[1] > score[0]){
        alert("You lost. Good luck next time!")
    }
}