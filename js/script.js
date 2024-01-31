'use strict';

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.btn-block');
console.log(btns[0].className);
console.log(btns[0].classList.item(0));
// btns[0].classList.add('red', 'orange');
// //btns[0].classList.remove('blue');
// btns[0].classList.toggle('blue');

// btns[1].classList.add('red');
// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

btns[0].addEventListener('click', () => {
  if (btns[1].classList.contains('red')) {
    btns[1].classList.remove('red');
  } else {
    btns[1].classList.add('red');
  }
});

btns[0].addEventListener('click', () => {
  btns[2].classList.toggle('red');
});

wrapper.addEventListener('click', (e) => {
  console.dir(e.target);
    //if (e.target && e.target.classList.contains('blue')) {
    //if (e.target && e.target.matches('button.red')) {
    if (e.target && e.target.tagName == 'BUTTON') {
    //console.log("Hello");
    e.target.classList.toggle('red');
  }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);