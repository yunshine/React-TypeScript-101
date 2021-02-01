// typing tsc sandbox.ts -w will keep "watching" this file and compile to sandbox.js whenever a change has been detected...
// TypeScipt Arrays
// if we declare/initialize an array with only one type, it cannot have other types in it...
var names = ['luigi', 'mario', 'yoshi'];
// names.push(3);
// names[1] = 3;
names.push('toad');
var numbers = [10, 20, 12, 15];
// numbers.push('shaun');
// numbers[0] = 'shaun';
numbers.push(25);
// this array can have strings and numbers but not booleans  in in because it was declared/initialized with strings and numbers  in it but not booleans...
var mixed = ['ken', 4, 'chun-li', 8, 9];
// mixed.push(true);
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// TypeScript Objects
// in this TypeScript example, 'ninja' must always be an object, 'name' and 'belt' must always be strings, and 'age' must always be a number...
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// ninja.age = '30';
ninja.age = 40;
ninja.name = 'ryu';
// in TypeScript, we can't add a new property to the ninja object like 'skills'...
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
/*
Notes From Lesson --------------------------------------------------------
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
*/
/*
Notes From Lesson 2--------------------------------------------------------
const character = 'Luigi';

console.log("Character Name: ", character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log("All Inputs: ", input);
});
*/