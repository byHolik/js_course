"use strict";

//To string
//1
console.log(typeof(String(null)));

//2
console.log(typeof(5 + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

//Ti number
//1
console.log(typeof(Number("4")));

//2
console.log(typeof(+"5"));

//3
console.log(typeof(parseInt("15px", 10)));

//let answ = +prompt("Hello", "");

//To boolean
//1
//false
//0, "", null, undefined,NaN;

let switcher = {};
if(switcher) {
	console.log("Working...");
}

//2
console.log(typeof(Boolean("4")));

//3
console.log(typeof(!!"444444"));