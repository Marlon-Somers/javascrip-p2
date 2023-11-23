
var div = document.getElementById('animatedDiv');


var currentPosition = 0;


var targetPosition = 1450;


var speed = 10;


function animate() {

  currentPosition += speed;


  div.style.left = currentPosition + 'px';

  
  if (currentPosition < targetPosition) {
    setTimeout(animate, 100);
  }
}


animate();