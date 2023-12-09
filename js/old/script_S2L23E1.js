"use strict";

//task1
let task1Counter = 5;

do {
    console.log(counter);
    task1Counter++;
} while(task1Counter <=10);

//task2
for(let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

//task3
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//task4
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let task4Counter = 2;

while (task4Counter <= 15) {
    task4Counter++;
    if (task4Counter % 2 === 0) {
        continue;
    } else {
        console.log(task4Counter);
    }
}

//task5
let array = [];
for (let i = 0; i <= 5; i++) {
    array[i] = i + 5;
}
console.log(array);

