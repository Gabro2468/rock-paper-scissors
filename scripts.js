const options = ["rock","paper","scissors"];

function computerChoice() {
    return options[Math.floor(Math.random() * 3)];
} 

function round(player,computer){
    player = prompt("Choose one of the three options(rock,paper,scissors): ")
    player = player.toLowerCase();
    computer = computerChoice()
    console.log("Players choice : " + player)
    console.log("Computer choice : " + computer)
    switch (true){
        case (player === computer):
            console.log("Draw!")
            break
        case (player == "rock" && computer == "scissors"):
            console.log("You win! Rock dulls scissors!")
            break
        case (player == "rock" && computer == "paper"):
            console.log("You lose! Paper surrounds rock!")
            break
        case (player == "paper" && computer == "rock"):
            console.log("You win! Paper surrounds rock!")
            break   
        case (player == "paper" && computer == "scissors"):
            console.log("You lose! Scissors cut paper!")
            break
        case (player == "scissors" && computer == "paper"):
            console.log("You win! Scissors cut paper!")
            break    
        case (player == "scissors" && computer == "rock"):
            console.log("You lose! Rock dulls scissors!")
            break
        default:
            alert("Enter a proper option!") 
    }
}