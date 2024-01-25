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
    const WIN = true;
    const LOSE = false;
    const TIE = null;
    const WIN_MSG = `You win! ${playerSelection} beats ${computerSelection}!`;
    const LOSE_MSG = `You lose! ${computerSelection} beats ${playerSelection}!`;
    const TIE_MSG = `Tie! We both picked ${playerSelection}! Let's play again.`;

    if (playerSelection === computerSelection) {
        divResults.textContent = TIE_MSG;
        return TIE;
    }
    if (playerSelection === ROCK) {
        if (computerSelection === PAPER) {
            divResults.textContent = LOSE_MSG;
            return LOSE;
        }
        divResults.textContent = WIN_MSG
        return WIN; //rock beats scissors
    }
    if (playerSelection === PAPER) {
        if (computerSelection === SCISSORS) {
            divResults.textContent = LOSE_MSG;
            return LOSE;
        }
        divResults.textContent = WIN_MSG
        return WIN; //Paper beats rock
    }
    if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) {
            divResults.textContent = LOSE_MSG;
            return LOSE;
        }
        divResults.textContent = WIN_MSG
        return WIN; //scissors beats paper
    }
}