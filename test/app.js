// we maken een canvas met 800x600 en voegen toe aan de html pagina
// Eerst definiëren we enkele variabelen
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

// Variabelen voor de positie en snelheid van de cirkel
let x = 50; // startpositie X
let y = 50; // startpositie Y
let dx = 4; // snelheid X
let dy = 3; // snelheid Y
let radius = 20; // radius van de cirkel

//variabelen cirkel 2:
let x2 = 100; // startpositie bal 2
let y2 = 100;
let snelheid = 5; // snelheid van sprongen vd bal
let radius2 = 15; // radius van cirkel 2
let score = 0;
let tijdTeller = 0;
let tijdMax = 25;

function scoreScherm() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(String(score), 10, 22);
    tijdTeller++;
    if (tijdTeller > tijdMax) {
        score++; // Corrected from Score++
        tijdTeller = 0;
    }
}

// functie om de bal te laten bewegen
function startBewegen() {
    dx = 4;
    dy = 3;
}

document.getElementById('startButton').addEventListener('click', startBewegen);

// eventlistener luistert toetsenbord uit en laadt informatie in variabele event.
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        x2 -= snelheid; // Corrected from x10
        if (x2 - radius2 < 0) {
            x2 = canvas.width - radius2;
        }
    } else if (event.key === 'ArrowRight') {
        x2 += snelheid;
        if (x2 + radius2 > canvas.width) {
            x2 = radius2;
        }
    } else if (event.key === 'ArrowUp') {
        y2 -= snelheid;
        if (y2 - radius2 < 0) {
            y2 = canvas.height - radius2;
        }
    } else if (event.key === 'ArrowDown') {
        y2 += snelheid;
        if (y2 + radius2 > canvas.height) {
            y2 = radius2;
        }
    }
});

// De functie om de cirkel te tekenen
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// De functie om de 2e cirkel te tekenen
function drawCircle2() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function collision() {
    // testen of de x en x2 elkaar raken en de y en y2 elkaar raken
    let dx = x - x2;
    let dy = y - y2;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < radius + radius2) {
        alert(`Score: ${score}. Game Over!`);
    }
}

// De update functie die elke frame wordt uitgevoerd
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawCircle(); // teken cirkel 1
    drawCircle2(); // teken 2e bal
    collision();
    scoreScherm(); // Added scoreScherm() call

    // Verander de positie van de cirkel
    x += dx;
    y += dy;

    // Laat de cirkel stuiteren wanneer hij de randen van het canvas raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    requestAnimationFrame(update); // Roep update weer aan voor de volgende frame
}

// Start de animatieloop
update();