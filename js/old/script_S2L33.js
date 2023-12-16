"use strict";

const arr = [1, 13, 26, 8, 9];

function compareNum(a, b) {
	return a-b;
}
arr.sort(compareNum);

console.log(arr);

arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
}

arr.forEach(function(item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str1 = prompt("", "");
const products = str1.split(", ");
products.sort();
console.log(products);
console.log(products.join("-"));
