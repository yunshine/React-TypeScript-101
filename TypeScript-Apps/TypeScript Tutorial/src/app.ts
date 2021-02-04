const anchorTag = document.querySelector('a')!;

// the console.log works, but there is a TS warning that the href could possibly be null. So, you can add a ! at the end of line 1 to tell TS that I KNOW that this querySelector will return a value...
console.log("Testing TypeScript: ", anchorTag.href);

// Lesson 11: TypeScript TypeCasting-----------------------------------
// const form = document.querySelector('form')!;
// now that I've told TS taht this is an HTMLFormElement, I have all the warnings and autocompletions associated with HTMLFormElements...
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const typeField = document.querySelector('#type') as HTMLSelectElement;
const toFromField = document.querySelector('#tofrom') as HTMLInputElement;
const detailsField = document.querySelector('#details') as HTMLInputElement;
const amountField = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(typeField.value, toFromField.value, detailsField.value, amountField.value, amountField.valueAsNumber);
});