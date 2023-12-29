'use strict';

//by id
const box = document.getElementById('box');
console.log(box);

//by Tag
const btns = document.getElementsByTagName('button');
const btn2 = document.getElementsByTagName('button')[1];
console.log(btns);
console.log(btns[0]);
console.log(btn2);

//by Name
const circles = document.getElementsByClassName('circle');
console.log(circles);
console.log(circles[0]);

//by scc selector
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
	console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

//by xpath
const xpathExpression = '//div[@class=\'circle\']';
const contextNode = document; // Выполняем запрос относительно всего документа

const result = document.evaluate(xpathExpression, contextNode, null, XPathResult.ANY_TYPE, null);
console.log(result);

let node = result.iterateNext();
while (node) {
	console.log(node);
	node = result.iterateNext();
}