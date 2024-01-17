const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById('player-choice');
const resultOutput = document.getElementById('resultOutput');

const possibleChoices = document.querySelectorAll('button');

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computer = "🪨";
    } else if (randomNumber === 2) {
        computer = "📃";
    } else if (randomNumber === 3) {
        computer = "✂️";
    }

    console.log(computer);
    document.getElementById('computer-choice').innerHTML = computer;
}

function getResult() {
    if (player === computer) {
        result = "Draw!";
    } else if (computer === '🪨' && player === '📃') {
        result = "Player Wins!";
    } else if (computer === '📃' && player === '✂️') {
        result = "Player Wins!";
    } else if (computer === '✂️' && player === '🪨') {
        result = "Player Wins!";
    } else if (player === '🪨' && computer === '📃') {
        result = "Computer Wins!";
    } else if (player === '📃' && computer === '✂️') {
        result = "Computer Wins!";
    } else if (player === '✂️' && computer === '🪨') {
        result = "Computer Wins!";
    }

    console.log(result);
    resultOutput.innerHTML = result;
}

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}));