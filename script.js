'use strict';

// =============================== Notes ==========================================
/*
// the document.querySelector is just a selector of an element
// after it we need to say which element we are selecting
// then, because the element is not only a text, we specify that we are selecting the textContent only

console.log(document.querySelector('.message').textContent); // logs the text content of the message class to the console
document.querySelector('.message').textContent =
  'You got the correct answer! 🎉'; // changes the text content inside the message class
document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = 15;


document.querySelector('.guess').value = 12;
// here the .value is a property that gets the value entered in the guess class, which is an input attribute, in the line above we 
console.log(document.querySelector('.guess').value);
*/

// ********************************************************************************
// ================== Building the Guess My Number! game ==========================
// ********************************************************************************

// below we will call a method that is an event listener, this will get the value added to the box once we click the check button
// inside the () after the addEventListener, we need to pass the type of the event
// then we need to tell what should be done, so we pass a function, and inside the function we well have the code to execute what we want. This method is called Event Handler
// in the function we created, the function stores in the guess variable the value entered in the checkbox, and convert it to a Number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// this function was created so we pass the message as parameter everytime we need to display a different message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when there's no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No value entered!';
    displayMessage('⛔ No value entered!');

    // when the player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥇 You guessed right!';
    displayMessage('🥇 You guessed right!');
    document.querySelector('.number').textContent = secretNumber;

    // below we are calling the whole body element and changing its style, background color and giving the color number
    document.querySelector('body').style.backgroundColor = '#60b347';

    // now we are increasing the width of the box which carries the number
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '😭 GAME OVER!';
      displayMessage('😭 GAME OVER!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#DC143C';
    }
    //      // the code below was replaced by the code above, that follows the DRY principle
    //     // when guess is too low
    //   } else if (guess < secretNumber) {
    //     score = score - 1;
    //     if (score > 0) {
    //       document.querySelector('.score').textContent = score;
    //       document.querySelector('.message').textContent = '📉 Too low!';d
    //     } else {
    //       document.querySelector('.score').textContent = 0;
    //       document.querySelector('.message').textContent = '😭 GAME OVER!';
    //     }

    //     // when guess is too high
    //     else if (guess > secretNumber) {
    //     score = score - 1;
    //     if (score > 0) {
    //       document.querySelector('.score').textContent = score;
    //       document.querySelector('.message').textContent = '📈 Too high!';
    //     } else {
    //       document.querySelector('.score').textContent = 0;
    //       document.querySelector('.message').textContent = '😭 GAME OVER!';
    //     }
    //   }
  }
});

// ********************************************************************************
// ================== GAME CHALLENGE WITH THE CODE ABOVE ==========================
// ********************************************************************************
// Implement a game reset functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
