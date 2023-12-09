"use strict"

const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log("Ok!");
}

console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( (1 && 2) && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || (null && !3) );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);

let hamburger1;
const fries1 = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger1 && cola || fries1 === 3 && nuggets) {
   console.log('Done!')
}

