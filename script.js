/* OUTLINE:
1. Prompt: Would you like to play? If so, how many rounds?
  1.a) If yes, go to 2.
  1.b) If no, print sad face and prompt again
2. Ask & Record user input; Generate computer choice
3. Determine round winner; keep track of score
4. Repeat for specified number of rounds
5. Determine game winner;

PSEUDOCODE:

//functions:
- promptStart()
- promptRounds()
- getUserChoice()
- generateComputerChoice()
- determineRoundWinner()
- determineGameWinner()
*/


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