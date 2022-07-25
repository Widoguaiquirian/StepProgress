'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const circles = document.querySelectorAll('.circle');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const progress = document.querySelector('.progress');

let currenV = 1;

next.addEventListener('click', function () {
  currenV++;
  if (currenV > circles.length) {
    currenV = circles.length;
  }
  update();
});

prev.addEventListener('click', function () {
  currenV--;
  if (currenV < 1) {
    currenV = 1;
  }
  update();
});

const update = function () {
  circles.forEach(function (circle, index) {
    if (index < currenV) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currenV === 1) {
    prev.disabled = true;
  } else if (currenV === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};
