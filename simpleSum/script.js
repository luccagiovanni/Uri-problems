var input = require('fs').readFileSync('stdin', 'utf8');
var valores = input.split('\n')

let A = parseInt(valores.shift());
let B = parseInt(valores.shift());

var soma = A + B;

console.log("SOMA = " + soma);