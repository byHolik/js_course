"use strict";

if (true) {
    console.log("Ok!");
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("To much");
} else {
    console.log("Ok!");
};

(num === 50) ? console.log("Ok!") : console.log("Error");

switch (num) {
    case 49:
        console.log("No");
        break;
    case 100:
        console.log("No");
        break;
    case 50:
        console.log("Ok!!!");
        break;
    default:
        console.log("Next time");
        break;
}