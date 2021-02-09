import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// Lesson 18: TypeScript Generics----------------------------------------------
// Generics allow us to create re-usable blocks of code which can be used with different types...
// what <T> does is capture whatever item we pass in to the function and it capture what properties are going to be on it so that when it returns, it's going to know what properties are on that object, and we can run something like console.log("Generic Name: ", genericTestObj.name) without TS errors...
// <T extends object> means that the type must be an object, and <T extends {name: string}> means that the type must be an object with a string name...
const addUID = (obj) => {
    // const addUID = <T extends object>(obj: T) => {
    // const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let genericTestObj = addUID({ name: "Yun", age: 43 });
console.log("Generic: ", genericTestObj);
// the console.log below will produce a TS error because what is being returned from the addUID function doesn't know yet that the genericTestObj object contains 'name' or not... so, we need to use <T>...
console.log("Generic Name: ", genericTestObj.name);
const genericWithInterfaceExample1 = {
    uid: 309,
    resourceName: "Months in Seoul",
    data: ["October", "November", "December", "January", "February"]
};
const genericWithInterfaceExample2 = {
    uid: 718,
    resourceName: "this is the resourceName...",
    data: {
        name: "Eunjoo",
        home: "Tokyo",
        hobbies: ["cafes", "blogging", "reading", "Netflix"]
    }
};
// Lesson 16: TypeScript Interfaces with Classes-------------------------------
let docOne;
let docTwo;
docOne = new Invoice("Eugene", "Books", 25);
docTwo = new Payment("Ami", "Coffee", 12);
// the docsArray can only hold objects that implement the HasFormat interface
let docsArray = [];
docsArray.push(docOne);
docsArray.push(docTwo);
console.log("docsArray: ", docsArray);
// if 'me' is a type of 'IsPerson', 'me' must follow the pattern of 'IsPerson'...
const me = {
    name: 'Yun',
    age: 43,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent $${amount}.`);
        return amount;
    },
    isCool: true
};
// Lessons 12 & 13: TypeScript Classes + Public, Private, Read-Only------------
// this Invoice class has been moved to demonstrate modules (Lesson 14)...
// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     // constructor(client: string, details: string, amount: number) {
//     // a better way to build a constructor...
//     constructor(
//         readonly client: string,
//         private details: string,
//         public amount: number
//     ) { }
//     format() {
//         return `${this.client} owes $${this.amount} for ${this.details}.`;
//     }
// }
const invoiceTestOne = new Invoice("Yun", "sneakers", 200);
const invoiceTestTwo = new Invoice("Eunjoo", "snacks", 15);
console.log(invoiceTestOne.format());
console.log(invoiceTestTwo.format());
// below, only objects using the Invoice class can be added to the invoices array...
let invoices = [];
// invoices.push("hello");
invoices.push(invoiceTestOne);
invoices.push(invoiceTestTwo);
console.log("Invoice objects only: ", invoices);
// You'll get errors for the console.log below because details is private...
// console.log("Details Example: ", invoiceTestOne.details);
invoices.forEach(invoice => {
    console.log("invoices array forEach: ", invoice.client, invoice.amount, invoice.format());
});
// Lesson 11: TypeScript TypeCasting------------------------------------------
const anchorTag = document.querySelector('a');
// the console.log below will work, but there is a TS warning that the href could possibly be null. So, you can add a ! at the end of line 1 to tell TS that I KNOW that this querySelector will return a value...
console.log("Testing TypeScript: ", anchorTag.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// now that I've told TS that this is an HTMLFormElement, I have all the warnings and autocompletions associated with HTMLFormElements...
// console.log(form.children);
// App Inputs
const typeField = document.querySelector('#type');
const toFromField = document.querySelector('#tofrom');
const detailsField = document.querySelector('#details');
const amountField = document.querySelector('#amount');
// list template instance...
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(typeField.value, toFromField.value, detailsField.value, amountField.value, amountField.valueAsNumber);
    let doc;
    if (typeField.value === 'invoice') {
        doc = new Invoice(toFromField.value, detailsField.value, amountField.valueAsNumber);
    }
    else {
        doc = new Payment(toFromField.value, detailsField.value, amountField.valueAsNumber);
    }
    list.render(doc, typeField.value, 'end');
    console.log("From the form:", doc);
});
