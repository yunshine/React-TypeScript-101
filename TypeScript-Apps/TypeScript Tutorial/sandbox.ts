// typing tsc sandbox.ts -w will keep "watching" this file and compile to sandbox.js whenever a change has been detected...

const character = 'Luigi';

console.log("Character Name: ", character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log("All Inputs: ", input);
});