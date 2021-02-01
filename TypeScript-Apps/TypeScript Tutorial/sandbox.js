// typing tsc sandbox.ts -w will keep "watching" this file and compile to sandbox.js whenever a change has been detected...
var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'luigi';
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circumference = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circumference('hello'));
console.log(circumference(7.5));
/*
Notes From Lesson 2--------------------------------------------------------
const character = 'Luigi';

console.log("Character Name: ", character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log("All Inputs: ", input);
});
*/ 
