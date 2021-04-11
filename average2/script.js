var input = require('fs').readFileSync('stdin', 'utf8');
var grades = input.split('\n');

var A = parseFloat(grades.shift());
var B = parseFloat(grades.shift());
var C = parseFloat(grades.shift());

var average = ((A * 2) + (B * 3) + (C * 5))/10;

console.log('MEDIA = ' + average);