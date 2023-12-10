"use strict";
const usdCurr = 28;
const discount = 0.9;

function convert(amount, currency) {
	return currency * amount;
}

function promoution(result) {
	console.log(result * discount);
}

const res = convert(500, usdCurr);
promoution(res);

function test() {
	for (let i=0; i < 5; i++) {
		console.log(i);
		if (i === 3) {
			return;
		}
	}
	console.log("Done");
}

test();

function doNothing() {}
console.log(doNothing() == undefined);