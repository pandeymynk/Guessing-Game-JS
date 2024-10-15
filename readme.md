Here's a complete and concise `README.md` file that includes all the parts you've asked for, while keeping it small and to the point:

---

# Guessing Game

A simple web-based guessing game where users try to guess a random number between 1 and 100. The game provides feedback on the guesses and tracks the number of attempts.

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Open `index.html` in your web browser.
2. Enter a number between 1 and 100 in the input field.
3. Click the "Guess" button to submit your guess.
4. Receive feedback indicating whether your guess is too high, too low, or correct.
5. The game keeps track of the number of guesses made.

## Features
- Input validation ensures the guess is a number between 1 and 100.
- Feedback is provided for each guess.
- The number of attempts is displayed.
- Automatically resets the game after a correct guess.

## JavaScript Explanation

### Element Selection
```javascript
let input = document.getElementById('input');
let btw = document.getElementById('btw');
let wrng = document.querySelector('.wrng');
let guess = document.getElementById("guess");
```
- **Purpose:** Selects input field, button, and display elements.

### Random Number Generation
```javascript
let answer = Math.floor(Math.random() * 100) + 1;
```
- **Purpose:** Generates a random number between 1 and 100.

### Guess Counter
```javascript
let numGuess = 0;
```
- **Purpose:** Tracks the number of guesses made by the user.

### Event Listener
```javascript
btw.addEventListener("click", () => {
    guessesNumber();
});
```
- **Purpose:** Calls the `guessesNumber` function when the button is clicked.

### Main Game Logic (guessesNumber Function)
```javascript
function guessesNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrng.innerHTML = "Enter a number between 1 and 100";
    } else {
        numGuess++;
        guess.innerHTML = "No. of Guesses: " + numGuess;

        if (input.value > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (input.value < answer) {
            wrng.innerHTML = "You guessed too low!";
            input.value = "";
        } else {
            wrng.innerHTML = "Congratulations! You guessed the correct answer.";
            setTimeout(() => {
                resetGame();
            }, 5000);
        }
    }
}
```
- **Purpose:** Validates input, updates guess count, and provides feedback based on the user's guess.

### Reset Game Function
```javascript
function resetGame() {
    numGuess = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    guess.innerHTML = "No. of Guess: 0";
}
```
- **Purpose:** Resets the game state, allowing for a new round after a correct guess.

## Summary of Functionality
- Validates user input to ensure it's a number between 1 and 100.
- Increments the guess counter each time the user makes a valid guess.
- Compares the user's guess to the answer and provides appropriate feedback.
- Resets the game automatically after a correct guess.

## Future Enhancements
- Add a reset button to allow the user to play again without refreshing the page.
- Improve the user interface with additional styling.
- Add a hint feature for guidance after several incorrect guesses.

---

This `README.md` file covers all the aspects you've requested while remaining clear and concise.