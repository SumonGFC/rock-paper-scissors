/* OUTLINE:
1. Prompt: Would you like to play? If so, how many rounds?
  1.a) If yes, go to 2.
  1.b) If no, print sad face and prompt again
2. Ask & Record user input; Generate computer choice
3. Determine round winner; keep track of score
4. Repeat for specified number of rounds
5. Determine game winner;
*/

const USER_WIN = true;
const USER_LOSE = false;
const ROCK = 'rock', PAPER = 'paper', SCISSORS = 'scissors';

while (true) {
  let numRounds;
  let userScore = 0, computerScore = 0;
  if (promptStart() === 'yes') {
    numRounds = promptRounds();
  } else {
    alert("Very well. Not everyone is brave enough to face me. Come back when you are stronger.")
    continue;
  };

  alert("Are you ready? Prepare yourself!");
  
  for (let i = 0; i < numRounds; i++) {
    let userChoice = getUserChoice();
    let computerChoice = generateEvilChoice(userChoice);
    // let computerChoice = generateComputerChoice();
    let roundResult = playRound(userChoice, computerChoice);
    if (roundResult === WIN) {userScore++}
    else computerScore++;
  };

  decideWinner(userScore, computerScore);
}

function promptStart() {
  //Prompt user; Return string 'yes' or 'no'
  let playGame;
  while (playGame !== 'yes' && playGame !== 'no') {
    playGame = prompt("Would you like to play Rock-Paper-Scissors with me?").toLowerCase();
    if (playGame !== 'yes' && playGame !== 'no') 
      alert("I'm sorry, I didn't understand that. Please type either Yes or No.");
  };
  return playGame;
}

function promptRounds() {
  //Prompt user for number of rounds; return positive int
  let rounds = 0; 
  while (rounds < 1 || rounds > 100 || isNaN(rounds)) {
    rounds = parseInt(prompt("How many rounds would you like to play?"));
    if (rounds < 1 || rounds > 100 || isNaN(rounds))
      alert("Please enter a positive number between 1 and 100.");
  };
  return rounds;
}

function getUserChoice() {
  let choice;
  while (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
    choice = prompt("Choose wisely!").toLowerCase();
    if (choice  !== ROCK && choice !== PAPER && choice !== SCISSORS)
      alert("You fool! That's not a valid choice!");
  };
  return choice;
}

function generateEvilChoice(playerChoice) {
  if (playerChoice === ROCK) return PAPER;
  else if (playerChoice === PAPER) return SCISSORS;
  else if (playerChoice === SCISSORS) return ROCK;
  else return 'ERROR: playerChoice is neither rock nor paper nor scissors';
}

function generateComputerChoice() {
  let x = Math.floor((Math.random()*3));
  if (x === 0) return ROCK;
  else if (x === 1) return PAPER;
  else return SCISSORS;
}

function playRound(x, y) {
  //input Users play and Computers play; return boolean (true for play false for machine)
}

function decideWinner(score1, score2) {

}