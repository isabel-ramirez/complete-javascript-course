'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent =
  'WOW CONGRATS THATS THE CORRECT NUMBER!! ! ٩(◕‿◕)۶';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 42140;

document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
*/

// HANDLING CLICK EVENTS
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');

// Define secret number
let secretNum = Math.trunc(Math.random() * 20 + 1);
console.log(secretNum);
let score = 20;
let highScore = 0;
// Check user's guess against secret number
// Wrong guess: Increment score, while loop ask for another guess
// Correct guess: change message, change color, no more input, check high score

const myFunc = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    messageElement.textContent = 'u didnt enter a number.. ᇂ_ᇂ';
  } else if (guess === secretNum) {
    messageElement.textContent =
      'WOW CONGRATS THATS THE CORRECT NUMBER!! ! ⸂⸂⸜(രᴗര๑)⸝⸃⸃';
    numberElement.textContent = secretNum;
    numberElement.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else {
    if (guess < secretNum) {
      messageElement.textContent = 'LMAOOO NO.. THATS TOO LOW (>▽<)';
    } else {
      messageElement.textContent = 'TOO HIGH oMG (´∀｀)';
    }

    score--;
    scoreElement.textContent = score;
    if (score === 0) {
      messageElement.textContent = 'GAME OVER!!';
    }
  }
};

const resetGame = function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreElement.textContent = score;
  messageElement.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  numberElement.textContent = '?';
  numberElement.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.check').addEventListener('click', myFunc);
document.querySelector('.again').addEventListener('click', resetGame);
