// typing tsc sandbox.ts -w will keep "watching" this file and compile to sandbox.js whenever a change has been detected...

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circumference = (diameter: number) => {
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