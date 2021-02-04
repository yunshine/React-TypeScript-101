// Lesson 12: TypeScript Classes------------------------------------------
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
    }
}

const invoiceTestOne = new Invoice("Yun", "sneakers", 200);
const invoiceTestTwo = new Invoice("Eunjoo", "snacks", 15);
console.log(invoiceTestOne.format());
console.log(invoiceTestTwo.format());

// below, only objects using the Invoice class can be added to the invoices array...
let invoices: Invoice[] = [];
// invoices.push("hello");
invoices.push(invoiceTestOne);
invoices.push(invoiceTestTwo);
console.log("Invoice objects only: ", invoices);



// Lesson 11: TypeScript TypeCasting------------------------------------------
const anchorTag = document.querySelector('a')!;

// the console.log below will work, but there is a TS warning that the href could possibly be null. So, you can add a ! at the end of line 1 to tell TS that I KNOW that this querySelector will return a value...
console.log("Testing TypeScript: ", anchorTag.href);

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// now that I've told TS that this is an HTMLFormElement, I have all the warnings and autocompletions associated with HTMLFormElements...
// console.log(form.children);

// App Inputs
const typeField = document.querySelector('#type') as HTMLSelectElement;
const toFromField = document.querySelector('#tofrom') as HTMLInputElement;
const detailsField = document.querySelector('#details') as HTMLInputElement;
const amountField = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(typeField.value, toFromField.value, detailsField.value, amountField.value, amountField.valueAsNumber);
});