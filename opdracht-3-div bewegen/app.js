var div = document.getElementById('animatedDiv');
var currentPosition = 0;
var targetPosition = 1450;
var speed = 3 ;
function animate() {
  currentPosition += speed;


  if (currentPosition >= targetPosition || currentPosition <= 0) {
    speed = -speed;
    changeColor();
  }

  div.style.left = currentPosition + 'px';

  requestAnimationFrame(animate);
}

function changeColor() {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  div.style.backgroundColor = randomColor;
}

div.addEventListener('click', changeColor);

animate();