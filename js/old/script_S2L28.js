"use strict";

const str = "Some Fruit";
const arr = [1, 2, 3];

console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("Fruit"));
console.log(str.slice(0, 5));
console.log(str.slice(0, 5).concat("apples"));
console.log(str.substring(0, 5));
console.log(str.substr(0, 4));

console.log(arr.length);

const num = 12.7;
console.log(Math.round(num));

const test1 = "12.7px";
console.log(parseInt(test1));

const test2 = "12.7px";
console.log(parseFloat(test2));