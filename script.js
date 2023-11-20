//ROCK-PAPER-SCISSORS

const USER_WIN = true, USER_LOSE = false, TIE = null;
const ROCK = 'rock', PAPER = 'paper', SCISSORS = 'scissors';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~GAME LOGIC
while (true) {
  let numRounds;
  let userScore = 0, computerScore = 0;

  //SET-UP THE GAME
  if (promptStart() === 'yes') {
    numRounds = promptRounds();
  } else {
    alert("Very well. Not everyone is brave enough to face me. Come back when you are stronger.")
    continue;
  };
  alert("Are you ready? Prepare yourself!");
  
  //PLAY THE GAME
  for (let i = 0; i < numRounds; i++) {
    let userChoice = getUserChoice();
    let computerChoice = generateEvilChoice(userChoice);
    // let computerChoice = generateComputerChoice();
    let roundResult = playRound(userChoice, computerChoice);

    //KEEP SCORE
    if (roundResult === USER_WIN) {
      userScore++;
      alert("Darn! You beat me!");
    } 
    else if (roundResult === USER_LOSE) {
      computerScore++;
      alert("You lose!");
    }
    else if (roundResult === TIE) {
      alert("Great minds think alike.")
    }
    else alert("ERROR -- USER/COMPUTER INPUT IS NOT VALID");
  };

  //DECIDE WINNER
  decideWinner(userScore, computerScore);
};


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCTIONS USED IN CODE
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
  if (playerChoice === ROCK) {
    console.log(`computer choice is ${PAPER}`);
    return PAPER;
  } else if (playerChoice === PAPER) {
    console.log(`computer choice is ${SCISSORS}`);
    return SCISSORS;
  } else if (playerChoice === SCISSORS) {
    console.log(`computer choice is ${ROCK}`);
    return ROCK;
  } else alert("ERROR: playerChoice is neither rock nor paper nor scissors");
}

/*
function generateComputerChoice() {
  let x = Math.floor((Math.random()*3));
  if (x === 0) return ROCK;
  else if (x === 1) return PAPER;
  else return SCISSORS;
}
*/

function playRound(playerSelection, computerSelection) {
  //input Users play and Computers play; return boolean (true for play false for machine)
  if (playerSelection === ROCK) {
    if (computerSelection === ROCK) {return TIE;}
    else if (computerSelection === PAPER) {return USER_LOSE;}
    else if (computerSelection === SCISSORS) {return USER_WIN}
  }
  else if (playerSelection === PAPER) {
    if (computerSelection === ROCK) {return USER_WIN;}
    else if (computerSelection === PAPER) {return TIE;}
    else if (computerSelection === SCISSORS) {return USER_LOSE;}
  }
  else if (playerSelection === SCISSORS) {
    if (computerSelection === ROCK) {return USER_LOSE;}
    else if (computerSelection === PAPER) {return USER_WIN;}
    else if (computerSelection === SCISSORS) {return TIE;}
  } 
  else alert("ERROR IN playRound() FUNCTION -- see code to fix immeditely!")
}

function generateRoundResultMessage(playerSelection, computerSelection, roundOutcome) {
  //code
}

function decideWinner(userScore, computerScore) {

}