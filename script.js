const options = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let playerScore = 0;
let computerScore = 0;

// A function that plays a single round
function playRound(playerSelection, computerSelection) {

    if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    
    } else if(playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    
    } else if(playerSelection ===  computerSelection) {
        return `It's a tie! Computer played ${computerSelection} and you played ${playerSelection}.`;
    
    } else {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    
}

// A function that gets and validates the player choice
function getPlayerChoice() {
    let validInput = false;
    while (validInput == false) {
        const choice = prompt("Enter rock, paper or scissors");
        if (choice == null) {
            continue;
        }
        const choiceToLower = choice.toLowerCase();
        if (options.includes(choiceToLower)) {
            validInput = true;
            return choiceToLower;
        }
    }

}

// Main function
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))


    }
    console.log("Game over!")
    console.log("**********************");
        
    if (computerScore > playerScore) {
        console.log(`You lose the game! Computer score: ${computerScore}. Your score: ${playerScore}.`)
    }
    else if (computerScore === playerScore) {
        console.log(`It's a tie! Computer score: ${computerScore}. Your score: ${playerScore}.`)
    }
    else {
        console.log(`You win the game! Computer score: ${computerScore}. Your score: ${playerScore}.`)
    }
}
game();

// END