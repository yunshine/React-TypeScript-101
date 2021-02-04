"use strict";
var anchorTag = document.querySelector('a');
// the console.log works, but there is a TS warning that the href could possibly be null. So, you can add a ! at the end of line 1 to tell TS that I KNOW that this querySelector will return a value...
console.log("Testing TypeScript: ", anchorTag.href);
// Lesson 11: TypeScript TypeCasting-----------------------------------
// const form = document.querySelector('form')!;
// now that I've told TS taht this is an HTMLFormElement, I have all the warnings and autocompletions associated with HTMLFormElements...
var form = document.querySelector('.new-item-form');
// console.log(form.children);
var typeField = document.querySelector('#type');
var toFromField = document.querySelector('#tofrom');
var detailsField = document.querySelector('#details');
var amountField = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(typeField.value, toFromField.value, detailsField.value, amountField.value, amountField.valueAsNumber);
});
