var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split('\n');

var infoItem1 = valores.shift().split(' ');
var infoItem2 = valores.shift().split(' ');

var idItem1 = infoItem1.shift();
var unitsItem1 = infoItem1.shift();
var priceItem1 = infoItem1.shift();
var totalValueItem1 = unitsItem1 * priceItem1;

var idItem2 = infoItem2.shift();
var unitsItem2 = infoItem2.shift();
var priceItem2 = infoItem2.shift();
var totalValueItem2 = unitsItem2 * priceItem2;

var totalPay = totalValueItem1 + totalValueItem2;

console.log('VALOR A PAGAR : R$ ' + totalPay.toFixed(2));