"use strict";

console.log(calculateVolumeAndArea(5));
console.log(getCoupeNumber(37));


// Место для первой задачи
function calculateVolumeAndArea(length) {
	if (typeof(length) == "number" && length >= 0 && length == Math.floor(length)) {
		let volume = length * length * length;
		let area = length * length * 6;
		return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
	} else {
		return "При вычислении произошла ошибка";
	}

}

// Место для второй задачи
function getCoupeNumber(number) {
	if (number !== Math.floor(number) || number < 0) {
		return "Ошибка. Проверьте правильность введенного номера места";
	} else if (number === 0 || number > 36 ) {
		return "Таких мест в вагоне не существует";
	} else {
		let coupe = number / 4;
		if (coupe == Math.floor(coupe)) {
			return coupe;
		} else {
			return Math.floor(coupe) + 1;
		}
	}
}

console.log(getCoupeNumber(37));