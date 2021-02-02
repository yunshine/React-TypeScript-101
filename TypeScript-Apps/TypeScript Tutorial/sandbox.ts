// typing tsc sandbox.ts -w will keep "watching" this file and compile to sandbox.js whenever a change has been detected...

// Notes From Lesson 4--------------------------------------------------------
// Explicit Types in TypeScript...
let characterName: string = 'mario';
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 43;

// isLoggedIn = 25;
isLoggedIn = true;


// TypeScript Arrays
// in the future, the array below can only be an array of strings. Also, be sure to initialize with an empty array. Otherwise, you can't push new values into it...
let ninjas: string[] = [];

// ninjas = [8, true, 319];
ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);


// TypeScript Union Types => multiple types allowed...
let mixed: (string | number | boolean)[] = [];

mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

// a TypeScript Union Type on a normal variable (not just arrays)...
let userID: string | number;
// userID = false;
userID = 123;
userID = '123';


// TypeScript Objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };


/*
// Notes From Lesson 4--------------------------------------------------------
// TypeScipt Arrays
// if we declare/initialize an array with only one type, it cannot have other types in it...
const names = ['luigi', 'mario', 'yoshi'];

// names.push(3);
// names[1] = 3;
names.push('toad');

const numbers = [10, 20, 12, 15];

// numbers.push('shaun');
// numbers[0] = 'shaun';
numbers.push(25);

// this array can have strings and numbers but not booleans  in in because it was declared/initialized with strings and numbers  in it but not booleans...
const mixed = ['ken', 4, 'chun-li', 8, 9];

// mixed.push(true);
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// TypeScript Objects
// in this TypeScript example, 'ninja' must always be an object, 'name' and 'belt' must always be strings, and 'age' must always be a number...
let ninja = {
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
    age: 40,
    // skills: ['running'],
};



// Notes From Lesson 3--------------------------------------------------------
// TypeScript Types...
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



// Notes From Lesson 2--------------------------------------------------------
const character = 'Luigi';

console.log("Character Name: ", character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log("All Inputs: ", input);
});
*/