"use strict";

console.log(getTimeFromMinutes(150));

// Место для первой задачи
function getTimeFromMinutes(timeInMinutes) {
	if (typeof(timeInMinutes) !== "number" || Math.floor(timeInMinutes) !== timeInMinutes || timeInMinutes < 0) {
		return "Ошибка, проверьте данные";
	} else {
		let hours = Math.floor(timeInMinutes / 60);
		let minutes = timeInMinutes - hours * 60;
		return `Это ${hours} ${hoursNaming(hours)} и ${minutes} ${minutesNaming(minutes)}`;
	}

}
function lastDigitInNumber(number){
	if (number > 10) {
		return number % 10;
	} else {
		return number;
	}
}

function hoursNaming (hours) {
	if (lastDigitInNumber(hours) == 1) {
		return "час";
	} else if (lastDigitInNumber(hours) >= 2 && lastDigitInNumber(hours) <= 4) {
		return "часа";
	} else {
		return "часов";
	}
}

function minutesNaming (minutes) {
	if (lastDigitInNumber(minutes) == 1) {
		return "минута";
	} else if (lastDigitInNumber(minutes) >= 2 && lastDigitInNumber(minutes) <= 4) {
		return "минуты";
	} else {
		return "минут";
	}
}
// Место для второй задачи
function findMaxNumber(a, b, c, d) {
	if (typeof(a) == "number" && typeof(b) == "number" && typeof(c) == "number" && typeof(d) == "number") {
		let max = a;
		max = (max < b) ? b : max;
		max = (max < c) ? c : max;
		max = (max < d) ? d : max;

		return max;
	} else {
		return 0;
	}
}

console.log(findMaxNumber(10, 200, 3, 4));