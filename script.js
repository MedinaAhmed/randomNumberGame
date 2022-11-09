'use strict';
//define a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let scoreText = document.querySelector('.score');
let numberClass = document.querySelector('.number');
const winText = 'Too high number!';
const loseText = 'Too low number!';
const lostText = 'You lost the Game!';
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  //if there is no number
  if (!guess) {
    displayMessage('No number!');
  } ///when player win the game
  else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberClass.style.width = '30rem';
    numberClass.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage(lostText);
      document.querySelector('.score').textContent = 0;
    }
  }
});
// reset for new game ---again---
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  score = 20;
  displayMessage('Start guessing..');
  numberClass.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  numberClass.style.width = '15rem';
  scoreText.textContent = score;
});
