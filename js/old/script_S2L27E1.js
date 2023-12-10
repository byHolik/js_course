// Место для первой задачи
function sayHello(personName) {
	return `Привет, ${personName}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
	return [number - 1, number, number +1];
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(number, repeatCounter) {
	let result = number;
	if (typeof(repeatCounter) === "number" && repeatCounter > 0) {
		for (let i = 2; i <= repeatCounter; i++) {
			result = result + "---" + number * i;
		}
	}
	return result;
}
console.log(getMathResult(5, -1));