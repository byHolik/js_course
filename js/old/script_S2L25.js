"use strict";

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
	console.log(num);

}

showFirstMessage("Hello World");
console.log(num);

function calc(a, b) {
	return a + b;
}

console.log(calc(4, 3));

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
	console.log("Hello!");
};

logger();

const calc1 = (a, b) => {
	console.log("Sum");
	return a + b; 
};
const calc2 = (a, b) => { return a + b; };
const calc3 = (a, b) =>  a + b;

console.log(calc1(1,3));
console.log(calc2(3,4));
console.log(calc3(5,7));