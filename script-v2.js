const ROCK = 'rock'; 
const PAPER = 'paper';
const SCISSORS = 'scissors';


//functions
function getComputerChoice() {
    const x = Math.floor(Math.random()*3);
    if (x === 0) return ROCK;
    if (x === 1) return PAPER;
    return SCISSORS;
}

function playRound(playerSelection, computerSelection) {
    const WIN = [1, 0];
    const LOSE = [0, 1];
    const TIE = [0, 0];
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
const scoreCard = document.querySelector("#score-card");
const roundResult = document.querySelector("#round-result");

let userScore = 0;
let computerScore = 0;

btnRock.addEventListener("click", () => {
    result = playRound(ROCK, getComputerChoice());
    userScore += result[0];
    computerScore += result[1];
    scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
});
btnPaper.addEventListener("click", () => {
    result = playRound(PAPER, getComputerChoice())
    userScore += result[0];
    computerScore += result[1];
    scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
});
btnScissors.addEventListener("click", () => {
    result = playRound(SCISSORS, getComputerChoice())
    userScore += result[0];
    computerScore += result[1];
    scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
});