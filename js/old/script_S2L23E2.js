"use strict";

//task1
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i =0; i < arr.length; i++) {
    result[i] = arr[i];
}

//task2
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if(typeof(data[i]) === "number")
    {
        data[i] *= 2;  
    }else {
        data[i] = data[i].concat(" - done");
    }
}

console.log(data);

//task3
data = [5, 10, 'Shopping', 20, 'Homework'];
result = [];

for (let i = 0; i < data.length; i++) {
    result[i] = data[data.length - i - 1];
}

console.log(result);