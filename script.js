var balls = document.getElementsByClassName('ball');
const mask = document.querySelector('.ghost-container');
const head = document.querySelector('body');
const eyes = document.querySelector('.eye')

document.onmousemove = function () {
  var x = event.clientX * 100 / window.innerWidth + '%';
  var y = event.clientY * 100 / window.innerHeight + '%';

  for (var i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(" - +x + ", " - +y + ")";
  }
}

const red = document.querySelector('.red');

red.addEventListener('click', function () {
  mask.style.backgroundColor = 'red';
  eyes.style.border = 'none';
  eye2.style.border = 'none';
})

const blue = document.querySelector('.blue');

blue.addEventListener('click', function () {
  mask.style.backgroundColor = 'blue';
  eyes.style.border = 'none';
  eye2.style.border = 'none';
})

const orange = document.querySelector('.orange');

orange.addEventListener('click', function () {
  mask.style.backgroundColor = 'orange';
  eyes.style.border = 'none';
  eye2.style.border = 'none';
})

const purple = document.querySelector('.purple');

purple.addEventListener('click', function () {
  mask.style.backgroundColor = 'purple';
  head.style.backgroundColor = 'green';
  eyes.style.border = 'none';
  eye2.style.border = 'none';
})

const yellow = document.querySelector('.yellow');
const eye2 = document.querySelector('.eye2');
yellow.addEventListener('click', function () {
  head.style.backgroundColor = 'yellow';
  mask.style.backgroundColor = 'yellow';
  eyes.style.border = '9px solid skyblue';
  eye2.style.border = '9px solid skyblue';
})




