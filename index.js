

const randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function playGame() {
  let userGuess =prompt("Guess a number between 1 and 100:");
  userGuess=parseInt(userGuess)
    guesses++;

    if (userGuess === randomNumber) {
      const score = 100 - guesses;
      alert(`Congratulations! You guessed the correct number in ${guesses} guesses. Your score is ${score}.`);
    } else if (userGuess > randomNumber) {
      alert("Your guess is greater than the actual number. Try again.");
      playGame();
    } else {
      alert("Your guess is lesser than the actual number. Try again.");
      playGame();
    }
  
}

playGame();