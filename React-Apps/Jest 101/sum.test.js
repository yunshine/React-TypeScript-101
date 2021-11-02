const sum = require('./sum');
// const subtract = require('./subtract');  -  How to import from different files...

// "expect" and "to be"
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// "expect" and "to be" with "not"
test('adds 1 + 2 to NOT equal 0', () => {
    expect(sum(1, 2)).not.toBe(0);
});

// NOTE: Jest checks for strict equality, so the test below will fail...
test('adds "1" + "1" to equal 11', () => {
    expect(sum("1", "1")).toBe(11);
});

// test('subtracts 1 from 40 to equal 39', () => {
//     expect(subtract(40, 1)).toBe(39);
// });
