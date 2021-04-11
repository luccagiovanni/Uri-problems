var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var sellerName = valores.shift();
var salary = parseFloat(valores.shift());
var sales = parseFloat(valores.shift());

var bonus = sales * 0.15;
var totalSalary = salary + bonus;

console.log('TOTAL = R$ ' + totalSalary.toFixed(2));