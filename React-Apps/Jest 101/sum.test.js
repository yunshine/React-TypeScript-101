const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 30 + 9 to equal 39', () => {
    expect(sum(30, 9)).toBe(39);
});
