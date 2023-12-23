"use strict";

// let number = 5; debugger;

// function logNumber() {
// 	let number =4; debugger;
// 	console.log(number);
// }

// number = +prompt("Сколько тебе лет,","");
// console.log(`Ульяне ${number} лет`);
// logNumber();

function createCounter() {
	let counter = 0;

	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};
	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

let val = 7;
function createAdder() {
	function addNumbers(a, b) {
		let ret = a + b;
		return ret;
	}
	return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log("example of function returning a function: ", sum);

let c = 4; debugger;
function addX(x) {
	return function(n) {
		return n + x;
	};
}
const addThree = addX(3);
let d = addThree(c);
let f = addThree(c);
f = f + addThree(c);
console.log("example partial application", f);