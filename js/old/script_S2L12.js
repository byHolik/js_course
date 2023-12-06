const arr = ['a', 'b', 'c'];
const arrObj ={
	a: 'a',
	1: 'b',
	2: 'c'
};
arrObj.b = '1234';
arrObj['c'] ='2222';
const d = 'd';
arrObj[d] = '3333';


console.log(arr[1]);
console.log(arrObj[1]);
console.log(arrObj.a);
console.log(arrObj['b']);
console.log(arrObj.c);
console.log(arrObj.d);

const obj = {
	'Anna': 500,
	'Alice': 200
};
console.log(obj.Alice);
console.log(obj['Alice']);
