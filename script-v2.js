
const USER_WIN = true;
const USER_LOSE = false;
const TIE = null;
const ROCK = 'rock'; 
const PAPER = 'paper';
const  SCISSORS = 'scissors';

function getComputerChoice() {
    let x = Math.floor(Math.random()*3)
    if (x === 0) return ROCK;
    else if (x === 1) return PAPER;
    else return SCISSORS;
}