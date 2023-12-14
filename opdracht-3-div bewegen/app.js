var div = document.getElementById('animatedDiv');
var currentPosition = 0;
var targetPosition = 1450;
var speed = 5; 

function animate() {
  currentPosition += speed;


  if (currentPosition >= targetPosition || currentPosition <= 0) {
    speed = -speed;
  }

  div.style.left = currentPosition + 'px';

  requestAnimationFrame(animate);
}

animate();
