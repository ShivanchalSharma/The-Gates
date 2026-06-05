'use strict';
const door = document.querySelector('.door');
const overlay = document.querySelector('.overlay');
const btnCloseDoor = document.querySelector('.close-door');
const btnOpenDoor1 = document.querySelector('.open-door1');
const btnOpenDoor2 = document.querySelector('.open-door2');
const btnOpenDoor3 = document.querySelector('.open-door3');

const build = document.querySelector('.build');
const strategy = document.querySelector('.strategy');
const think = document.querySelector('.think');

const openDoor = function (para) {
  build.classList.add('hidden');
  strategy.classList.add('hidden');
  think.classList.add('hidden');
  para.classList.remove('hidden');
  door.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeDoor = function () {
  door.classList.add('hidden');
  overlay.classList.add('hidden');
};
overlay.addEventListener('click', function () {
  closeDoor();
});
btnOpenDoor1.addEventListener('click', function () {
  openDoor(build);
});
btnOpenDoor2.addEventListener('click', function () {
  openDoor(strategy);
});
btnOpenDoor3.addEventListener('click', function () {
  openDoor(think);
});
btnCloseDoor.addEventListener('click', closeDoor);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!door.classList.contains('hidden')) {
      closeDoor();
    }
  }
});
