"use strict";
// Lesson 12: TypeScript Classes------------------------------------------
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details + ".";
    };
    return Invoice;
}());
var invoiceTestOne = new Invoice("Yun", "sneakers", 200);
var invoiceTestTwo = new Invoice("Eunjoo", "snacks", 15);
console.log(invoiceTestOne.format());
console.log(invoiceTestTwo.format());
// below, only objects using the Invoice class can be added to the invoices array...
var invoices = [];
// invoices.push("hello");
invoices.push(invoiceTestOne);
invoices.push(invoiceTestTwo);
console.log("Invoice objects only: ", invoices);
// Lesson 11: TypeScript TypeCasting------------------------------------------
var anchorTag = document.querySelector('a');
// the console.log below will work, but there is a TS warning that the href could possibly be null. So, you can add a ! at the end of line 1 to tell TS that I KNOW that this querySelector will return a value...
console.log("Testing TypeScript: ", anchorTag.href);
// const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
// now that I've told TS that this is an HTMLFormElement, I have all the warnings and autocompletions associated with HTMLFormElements...
// console.log(form.children);
// App Inputs
var typeField = document.querySelector('#type');
var toFromField = document.querySelector('#tofrom');
var detailsField = document.querySelector('#details');
var amountField = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(typeField.value, toFromField.value, detailsField.value, amountField.value, amountField.valueAsNumber);
});
