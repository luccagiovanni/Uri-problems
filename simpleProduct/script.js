var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n');

let A = parseInt(valores.shift());
let B = parseInt(valores.shift());

var PROD = A * B;

console.log("PROD = " + PROD);