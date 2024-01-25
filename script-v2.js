const ROCK = 'rock'; 
const PAPER = 'paper';
const  SCISSORS = 'scissors';

//DOM-manipulation:
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const divResults = document.querySelector("#results")

btnRock.addEventListener("click", () => {
    playRound(ROCK, getComputerChoice())
});
btnPaper.addEventListener("click", () => {
    playRound(PAPER, getComputerChoice())
});
btnScissors.addEventListener("click", () => {
    playRound(SCISSORS, getComputerChoice())
});

//functions
function getComputerChoice() {
    const x = Math.floor(Math.random()*3)
    if (x === 0) return ROCK;
    if (x === 1) return PAPER;
    return SCISSORS;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const WIN = true;
    const LOSE = false;
    const WIN_MSG = `You win! ${playerSelection} beats ${computerSelection}!`;
    const LOSE_MSG = `You lose! ${computerSelection} beats ${playerSelection}!`;
    const TIE_MSG = `Tie! We both picked ${playerSelection}! Let's play again.`;

    if (playerSelection === computerSelection) {
        console.log(TIE_MSG);
        return playRound(prompt("Make your choice:"), getComputerChoice());
    }
    if (playerSelection === ROCK) {
        if (computerSelection === PAPER) {
            console.log(LOSE_MSG);
            return LOSE;
        }
        console.log(WIN_MSG)
        return WIN; //rock beats scissors
    }
    if (playerSelection === PAPER) {
        if (computerSelection === SCISSORS) {
            console.log(LOSE_MSG);
            return LOSE;
        }
        console.log(WIN_MSG)
        return WIN; //Paper beats rock
    }
    if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) {
            console.log(LOSE_MSG);
            return LOSE;
        }
        console.log(WIN_MSG)
        return WIN; //scissors beats paper
    }
    return playRound(
        prompt("You seem to have made an invalid choice. Please choose again:"),
        getComputerChoice());   
}