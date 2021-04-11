var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

let A = parseInt(valores.shift());
let B = parseInt(valores.shift());
let C = parseFloat(valores.shift());

var employee = A;
var salary = B * C;

console.log('NUMBER = ' + employee);
console.log('SALARY = U$ ' + salary.toFixed(2));