'use strict';

const num = 700;

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'),
	oneHeart = wrapper.querySelector('.heart');


box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = `background-color: green; width: ${num}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

for (let i = 0; i < hearts.length; i++) {
	hearts[i].style.backgroundColor = 'purple';
}

hearts.forEach(item => {
	item.style.backgroundColor = 'white';
});

const div = document.createElement('div');
const text = document.createTextNode('Трям!');

div.classList.add('black');

wrapper.append(div);
//wrapper.appendChild(div);

//wrapper.prepend(div);

//hearts[1].before(div);
// hearts[1].after(div);

//wrapper.insertBefore(div, hearts[2]);

// circles[1].remove();
//wrapper.removeChild(hearts[1]);

hearts[2].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[2]);

div.innerHTML = '<h1>Hello World!</h1>';
//div.textContent = 'Hello';

div.insertAdjacentHTML('beforeend', '<h2>Hellllo!</h2>');




