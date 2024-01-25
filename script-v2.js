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
        roundResultDiv.textContent = TIE_MSG;
        return TIE;
    }
    if (playerSelection === ROCK) {
        if (computerSelection === PAPER) {
            roundResultDiv.textContent = LOSE_MSG;
            return LOSE;
        }
        roundResultDiv.textContent = WIN_MSG
        return WIN; //rock beats scissors
    }
    if (playerSelection === PAPER) {
        if (computerSelection === SCISSORS) {
            roundResultDiv.textContent = LOSE_MSG;
            return LOSE;
        }
        roundResultDiv.textContent = WIN_MSG
        return WIN; //Paper beats rock
    }
    if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) {
            roundResultDiv.textContent = LOSE_MSG;
            return LOSE;
        }
        roundResultDiv.textContent = WIN_MSG
        return WIN; //scissors beats paper
    }
}

function decideWinner() {
    if (Math.max(userScore, computerScore) === ROUNDS) {
        if (userScore === ROUNDS) {
            alert("Congrats! You win!");
            userScore = 0;
            computerScore = 0;
            scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
            roundResultDiv.textContent = "Let's play again!";
        } else {
            alert("You lose. Try better next time");
            userScore = 0;
            computerScore = 0;
            scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
            roundResultDiv.textContent = "Let's play again!";
        }
    }
    return;
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const scoreCard = document.querySelector("#score-card");
const roundResultDiv = document.querySelector("#round-result");

const ROUNDS = 5;
let userScore = 0;
let computerScore = 0;

let roundResult;

btnRock.addEventListener("click", () => {
    roundResult = playRound(ROCK, getComputerChoice());
    userScore += roundResult[0];
    computerScore += roundResult[1];
    scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
    decideWinner();
});
btnPaper.addEventListener("click", () => {
    roundResult = playRound(PAPER, getComputerChoice())
    userScore += roundResult[0];
    computerScore += roundResult[1];
    scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
    decideWinner();
});
btnScissors.addEventListener("click", () => {
    roundResult = playRound(SCISSORS, getComputerChoice())
    userScore += roundResult[0];
    computerScore += roundResult[1];
    scoreCard.textContent = `You: ${userScore}, Computer: ${computerScore}`;
    decideWinner();
});