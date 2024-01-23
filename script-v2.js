const ROCK = 'rock'; 
const PAPER = 'paper';
const  SCISSORS = 'scissors';

function getComputerChoice() {
    const x = Math.floor(Math.random()*3)
    if (x === 0) return ROCK;
    if (x === 1) return PAPER;
    return SCISSORS;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const WIN = `Congrats! You win! ${playerSelection} beats ${computerSelection}!`;
    const LOSE = `You lose! ${computerSelection} beats ${playerSelection}!`;
    const TIE = `Tie! You both picked ${playerSelection}!`;

    if (playerSelection === computerSelection) return TIE;

    if (playerSelection === ROCK){
        if (computerSelection === PAPER) return LOSE;
        return WIN; //rock beats scissors
    }

    if (playerSelection === PAPER) {
        if (computerSelection === SCISSORS) return LOSE;
        return WIN; //Paper beats rock
    }
    
    if (playerSelection === SCISSORS) {
        if (computerSelection === ROCK) return LOSE;
        return WIN; //scissors beats paper
    }
    
    return "Error in playRound --- passed invalid playerSelection";   
}