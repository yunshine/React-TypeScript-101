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


// For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);  This won't work because of rounding error
    expect(value).toBeCloseTo(0.3);  // This works.
});


// You can check strings against regular expressions with toMatch:
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});


// You can check if an array or iterable contains a particular item using toContain:
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(['salmon', 'ginger ale', 'pesto']).toContain('salmon');
    expect(new Set(shoppingList)).toContain('milk');
});


// If you want to test whether a particular function throws an error when it's called, use toThrow.
// Note: the function that throws an exception needs to be invoked within a wrapping function otherwise the toThrow assertion will fail.
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});



// TESTING ASYNC CODE - Instead of putting the test in a function with an empty argument, use a single argument called done. Jest will wait until the done callback is called before finishing the test.
const fetchData = callback => {
    const data = "peanut butter";
    callback(data);
}

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});
/*  If done() is never called, the test will fail (with timeout error), which is what you want to happen.
If the expect statement fails, it throws an error and done() is not called. If we want to see in the test log why it failed, we have to wrap expect in a try block and pass the error in the catch block to done. Otherwise, we end up with an opaque timeout error that doesn't show what value was received by expect(data).  */



/*  If your code uses PROMISES, there is a more straightforward way to handle asynchronous tests. Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.

For example, let's say that fetchDataWithPromise, instead of using a callback, returns a promise that is supposed to resolve to the string 'peanut butter'. We could test it with:  */

const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        const data = "peanut butter";
        const err = "error";

        resolve(data);
        reject(err);
    });
}

test('the data is peanut butter', () => {
    return fetchDataWithPromise().then(data => {
        expect(data).toBe('peanut butter');
    });
});

// Be sure to return the promise - if you omit this return statement, your test will complete before the promise returned from fetchData resolves and then() has a chance to execute the callback.

// If you expect a promise to be rejected, use the.catch method.Make sure to add expect.assertions to verify that a certain number of assertions are called.Otherwise, a fulfilled promise would not fail the test.

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchDataWithPromise().catch(e => expect(e).toMatch('error'));
});