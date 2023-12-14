//we maken een canvas met 800x600 en voegen toe aan de html pagina
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

let x = 50;
let y = 50;
let dx = 10;
let dy = 10;
let radius = 31;

function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawCircle();

    // veranderd de positie van de cirkel
    x += dx; // = x=x+dx
    y += dy;

    // laat de cirkel stuiteren wanneer hij randen van het canvas raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    requestAnimationFrame(update);
}

update();
