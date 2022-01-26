const Ship = require('./Ship');

test('Returns [2] when hit at position 2', () => {
    expect(Ship([2,3]).hit(2)).toStrictEqual(["hit", 3])
})

test('isSunk returns false if any unhit coordinates', () => {
    expect(Ship([2, "hit", 4]).isSunk()).toBe(false);
});

test('isSunk returns true if no unhit coordinates', () => {
    expect(Ship(["hit", "hit", "hit"]).isSunk()).toBe(true);
});