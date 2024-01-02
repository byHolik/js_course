'use strict';

const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');
//console.log(btn);

// btn.onclick = function() {
// 	alert('click 2');
// };

// btn.addEventListener('click', () => {
// 	alert('Click 3');
// });

// btn.addEventListener('click', () => {
// 	alert('Second Click 3');
// });

//let i =0;
const deleteElement = (event, i) => {
	console.log(event.currentTarget);
	console.log(event.type + i);
	//event.target.remove();
	//console.log('mouse hover');
	// i++;
	// if (i === 2) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach((btn,i) => {
	btn.addEventListener('click', (e) => deleteElement(e, i), {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target.innerText);
});