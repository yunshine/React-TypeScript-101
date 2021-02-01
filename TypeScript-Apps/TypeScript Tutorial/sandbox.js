// typing tsc sandbox.ts -w will keep "watching" this file and compile to sandbox.js whenever a change has been detected...
var character = 'Luigi';
console.log("Character Name: ", character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log("All Inputs: ", input);
});
