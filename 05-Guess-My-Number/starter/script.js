'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('❌ No number');
  } else if (guess === secretNum) {
    displayMessage('🎉 Correcr Number');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }else if (guess !== secretNum){
    if (score > 1) {
      displayMessage(guess > secretNum ? '📈 Too high!' : '📉 Too low!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  displayMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
