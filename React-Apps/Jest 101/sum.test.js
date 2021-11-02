const sum = require('./sum');
const subtract = require('./subtract');  /*  How to import from different files...  */

// "expect" and "to be"
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


test('subtracts 1 from 40 to equal 39', () => {
    expect(subtract(40, 1)).toBe(39);
});


// "expect" and "to be" with "not"
test('adds 1 + 2 to NOT equal 0', () => {
    expect(sum(1, 2)).not.toBe(0);
});


// NOTE: Jest checks for strict equality, so the test below will fail...
test('adds "1" + "1" to equal 11', () => {
    expect(sum("1", "1")).not.toBe(11);
});


// In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.
test('null', () => {
    const isNull = null;
    expect(isNull).toBeNull();
    expect(isNull).toBeDefined();
    expect(isNull).not.toBeUndefined();
    expect(isNull).not.toBeTruthy();
    expect(isNull).toBeFalsy();
});

test('zero', () => {
    const isZero = 0;
    expect(isZero).not.toBeNull();
    expect(isZero).toBeDefined();
    expect(isZero).not.toBeUndefined();
    expect(isZero).not.toBeTruthy();
    expect(isZero).toBeFalsy();
});


// Most ways of comparing numbers have matcher equivalents.
test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});