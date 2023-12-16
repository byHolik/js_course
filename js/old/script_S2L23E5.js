const lines = 5;
let result = '';

for (let i = 1; i <= lines; i++) {
    for (let k = lines-i; k >= 1; k--) {
        result += " ";
    }
    for (let j = 1; j < i*2; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);