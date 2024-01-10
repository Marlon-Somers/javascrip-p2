// script.js
document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const resetButton = document.getElementById('resetButton');
    const scoreDisplay = document.getElementById('score');
  
    let score = 0;
    let spawnInterval = 2000;
    let intervalId;
  
    function getRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  
    function createOrb() {
      const orb = document.createElement('div');
      orb.className = 'orb';
      const x = Math.floor(Math.random() * (window.innerWidth - 50));
      const y = Math.floor(Math.random() * (window.innerHeight - 50));
  
      orb.style.left = `${x}px`;
      orb.style.top = `${y}px`;
      orb.style.backgroundColor = getRandomColor();
  
      orb.addEventListener('click', () => {
        gameContainer.removeChild(orb);
        increaseSpeed();
        updateScore(); // Added to update the score when an orb is clicked
      });
  
      gameContainer.appendChild(orb);
    }
  
    function increaseSpeed() {
      spawnInterval *= 0.9;
      clearInterval(intervalId);
      intervalId = setInterval(createOrb, spawnInterval);
    }
  
    function updateScore() {
      score++;
      scoreDisplay.innerText = `Score: ${score}`;
    }
  
    function resetGame() {
      clearInterval(intervalId);
      removeAllOrbs();
      score = 0;
      updateScore();
      setTimeout(() => { intervalId = setInterval(createOrb, spawnInterval); }, 0);
    }
  
    function removeAllOrbs() {
      const orbs = document.querySelectorAll('.orb');
      orbs.forEach((orb) => gameContainer.removeChild(orb));
    }
  
    resetButton.addEventListener('click', resetGame);
  
    updateScore();
    intervalId = setInterval(createOrb, spawnInterval);
  });
  