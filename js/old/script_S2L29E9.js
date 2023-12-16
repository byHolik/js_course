"use strict";

console.log(fib(0));

function fib(counter) {

	if (typeof (counter) == "number" && counter == Math.floor(counter) && counter > 0) {
		let last1 = 0;
		let last2 = 1;
		let result = "0 1";
		if (counter > 2) {
			for (let i = 2; i < counter; i++) {
				let sum = last1 + last2;
				last1 = last2;
				last2 = sum;
				result = result + " " + last2;
			}
			return result;
		} else if (counter == 1) {
			return "0";
		} else {
			return result;
		}
	} else {
		return "";
	}

}