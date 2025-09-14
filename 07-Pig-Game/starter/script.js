'use strict';

// Select elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let playing, activePlayerId, currentScore, totalScores;

// Starting conditions
const init = function () {
  playing = true;
  activePlayerId = 0;
  currentScore = 0;
  totalScores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayerId}`).textContent = 0;
  activePlayerId = activePlayerId ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      // Add dice to current score
      currentScore += diceNum;
      document.getElementById(`current--${activePlayerId}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Holding score functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    totalScores[activePlayerId] += currentScore;
    document.getElementById(`score--${activePlayerId}`).textContent = totalScores[activePlayerId];
    currentScore = 0;
    document.getElementById(`current--${activePlayerId}`).textContent = 0;

    if (totalScores[activePlayerId] >= 100) {
      // Current player wins
      playing = false;
      document.querySelector(`.player--${activePlayerId}`).classList.remove('player--active');
      document.querySelector(`.player--${activePlayerId}`).classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// Reset game functionality
btnNew.addEventListener('click', init)
