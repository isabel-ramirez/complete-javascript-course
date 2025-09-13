'use strict';

// Select elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let activePlayerId = 0;
let totalScore0 = 0;
let totalScore1 = 0;
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generate random dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;
  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${diceNum}.png`);
  // Check for rolled 1: if true, switch to next player
  if (diceNum !== 1) {
    // Add dice to current score
    currentScore += diceNum;
    current0El.textContent = currentScore;
  } else {
    // Switch to next player
  }
})

// Holding score functionality
btnHold.addEventListener('click', function () {
  totalScore0 += currentScore;
  score0El.textContent = totalScore0;
  currentScore = 0;
  current0El.textContent = currentScore;

  if (totalScore0 >= 100) {
    // Current player wins

  } else {
    // Switch players
  }
})
