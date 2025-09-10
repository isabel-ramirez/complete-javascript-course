'use strict';

const numberElement = document.querySelector('.number');

// Game start conditions
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function () {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('u didnt enter a number.. ᇂ_ᇂ');
  } else if (guess === secretNum) {
    displayMessage('WOW CONGRATS THATS THE CORRECT NUMBER!! ! ⸂⸂⸜(രᴗര๑)⸝⸃⸃');
    numberElement.textContent = secretNum;
    numberElement.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    displayMessage(
      guess < secretNum
        ? 'LMAOOO NO.. THATS TOO LOW (>▽<)'
        : 'TOO HIGH oMG (´∀｀)'
    );

    if (score > 0) {
      score--;
      updateScore();
    }

    if (score === 0) {
      displayMessage('GAME OVER!!');
    }
  }
});

const resetGame = function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  updateScore();
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  numberElement.textContent = '?';
  numberElement.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.again').addEventListener('click', resetGame);
