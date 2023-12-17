"use strict";

const someString = "This is some strange string";

function reverse(str) {
	if (typeof(str) === "string") {
		const copyString = str.slice();
		let reverseString = "";
		for (let i = copyString.length-1; i >= 0; i-- ) {
			reverseString += copyString[i];
		}
		return reverseString;
	} else {
		return "Ошибка!";
	}
}
console.log(reverse(someString));

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
	let result = "";

	result = arr.length === 0 ? result = "Нет доступных валют" : result = "Доступные валюты:\n";
	arr.forEach(element => {
		if (element != missingCurr) {
			result += `${element}\n`;
		}
	});
	return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "UAH"));


