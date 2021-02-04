// typing tsc sandbox.ts -w will keep "watching" this file and compile to sandbox.js whenever a change has been detected...

// typing tsc --init will create a TypeScript config file where we can set the root directory of our TS files as well as where the compiled JS files will be sent to...
// from the root directory in the terminal, hit tsc -w to compile all the files in src dir and send the JS files to the public folder...

// Notes From Lesson 10--------------------------------------------------------
// TypeScript Function Signatures...

// Example 1 of giving a function a TypeScript signature...
let basicGreet: Function;
basicGreet = (name: string, greeting: string) => {
    console.log(`${name} says "${greeting}`)
}
basicGreet("Yun", "Hi");

// Example 2 of giving a function a TypeScript signature...
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says "${greeting}"`)
}

greet("Yun", "Hola");

// Example 3 of giving a function a TypeScript signature...
let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
        return numOne + numTwo;
    } else {
        return numOne * numTwo;
    }
}

console.log(calculate(5, 5, "add"));
console.log(calculate(5, 5, "calculate"));

// Example 4 of giving a function a TypeScript signature...
let logDetails: (ob: { name: string, age: number }) => void;
type person = { name: string, age: number };

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`)
}

logDetails({ name: "Yun", age: 43 });



/*
// Notes From Lesson 9--------------------------------------------------------
// TypeScript Aliases...

// syntax for reusing explicit types...
type StringOrNum = string | number;
type objWithName = { name: string, userID: StringOrNum };

const itemDetails = (itemID: StringOrNum, itemName: string) => {
    console.log(`Using the StringOrNum Alias: ${itemName} has an ID of ${itemID}`);
}

const greet = (user: objWithName) => {
    console.log(`Using the ojbWithName Alias: ${user.name}, with the ID ${user.userID}, says 'hello!'...`)
}

const greetAgain = (user: objWithName) => {
    console.log(`Using the ojbWithName Alias: ${user.name}, with the ID ${user.userID}, says 'Nice to see you again!'`)
}

itemDetails(309, "Wedding Band");
greet({ name: "Yun", userID: 718 });
greetAgain({ name: "Eunjoo", userID: 122 });



// Notes From Lesson 8--------------------------------------------------------
// TypeScript Function Basics...
// 'greet' has now been set to be a function... don't forget to use capital F in 'Function"...
let greet: Function = () => {
    console.log('hello from sandbox.ts...');
}

// greet = 'hello';
greet = () => {
    console.log('hello, again from sandbox.ts...');
}

// how to set a type for parameters...
// the question mark after 'c' means it is an optional parameter that can be a number or a string with a default value of 10...
// 'void' means we are not returning anything from this function...
// const add = (a: number, b: number, c?: number | string = 10): void => {
const add = (a: number, b: number, c?: number | string = 10) => {
    console.log("Answer from the function 'add': ", a + b + c);
    console.log("C is: ", c);
}

add(5, 10);
add(5, 10, 50);
add(5, 10, '50');
add(5, 10, 'ninja');

// you can explicitly set the return type to be a numbet with ':number' after the parentheses and before the arrow...
const minus = (a: number, b: number): number => {
    return a + b;
}

// TypeScript now sets 'result' to be of type 'number'...
let result = minus(10, 7);
// result = "math!";
console.log("Answer from the function 'minus': ", result);



// Notes From Lesson 7--------------------------------------------------------
// TypeScript File Organization and tsconfig.json...
console.log("testing123 from sandbox.ts...")



// Notes From Lesson 6--------------------------------------------------------
// Dynamic Types => any...
let age: any = 25;

age = true;
age = "43";

// But using 'any' basically negate the benefits of using TypeScript, so think twice before using 'any'...



// Notes From Lesson 5--------------------------------------------------------
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



// Notes From Lesson 4--------------------------------------------------------
// TypeScipt Arrays & Objects Part 1...
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


// TypeScipt Arrays & Objects Part 2...
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