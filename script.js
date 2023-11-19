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
- initializeGame()
- getUserChoice()
- generateComputerChoice()
- determineRoundWinner()
- determineGameWinner()

while gameState == 0:
prompt("Would you like to play?")
  if yes: rounds = prompt("how many rounds?"); gameState = 1;
  if no: print("It's okay; not everyone is brave enough to face me!");

for i=1,...,rounds:
  
  x = getUserChoice();
  y = generateComputerChoice(x);
  determineRoundWinner(x, y);

determineGameWinner();
*/