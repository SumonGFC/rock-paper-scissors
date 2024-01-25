const ROCK = 'rock'; 
const PAPER = 'paper';
const  SCISSORS = 'scissors';
const roundResult = document.querySelector("#round-result")

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
        roundResult.textContent = TIE_MSG;
        return TIE;
    }
    if (playerSelection === ROCK) {
        if (computerSelection === PAPER) {
            roundResult.textContent = LOSE_MSG;
            return LOSE;
        }
        roundResult.textContent = WIN_MSG
        return WIN; //rock beats scissors
    }
    if (playerSelection === PAPER) {
        if (computerSelection === SCISSORS) {
            roundResult.textContent = LOSE_MSG;
            return LOSE;
        }
        roundResult.textContent = WIN_MSG
        return WIN; //Paper beats rock
    }
    if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) {
            roundResult.textContent = LOSE_MSG;
            return LOSE;
        }
        roundResult.textContent = WIN_MSG
        return WIN; //scissors beats paper
    }
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
    playRound(ROCK, getComputerChoice())
});
btnPaper.addEventListener("click", () => {
    playRound(PAPER, getComputerChoice())
});
btnScissors.addEventListener("click", () => {
    playRound(SCISSORS, getComputerChoice())
});


//potential entry point for executing game logic
const body = document.querySelector("body");

body.addEventListener("click", (e) => {
    const target = e.target;


});