var input = require('fs').readFileSync('stdin', 'utf8');
var grades = input.split('\n');

var A = parseFloat(grades.shift());
var B = parseFloat(grades.shift());


var average = ((A * 3.5) + (B * 7.5))/11

console.log('MEDIA = ' + average.toFixed(5));