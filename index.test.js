const Ship = require('./Ship');
const Gameboard = require('./Gameboard');

describe('Ship function', () => {
    test('returns array of [0,1] when given this array as param', () => {
        expect(Ship([0,1]).coordinates).toStrictEqual([0,1]);
    })

    test('Returns [2] when hit at position 2', () => {
        expect(Ship([2,3]).hit(2)).toStrictEqual(["hit", 3])
    });
    
    test('isSunk returns false if any unhit coordinates', () => {
        expect(Ship([2, "hit", 4]).isSunk()).toBe(false);
    });

    test('isSunk returns true if no unhit coordinates', () => {
        expect(Ship(["hit", "hit", "hit"]).isSunk()).toBe(true);
    });
});




describe('Gameboard function', () => {

    test('grid function returns 100 length array on initialize', () => {
        let gameboard = Gameboard();
        expect(gameboard.grid.length).toStrictEqual(100);
    });

    test('Places ship at coordinates on grid', () => {
        const ship = Ship([0,1]);
        let game = Gameboard(5);
        expect(game.placeShip(ship)).toEqual(expect.arrayContaining(["X", "X", 2, 3, 4]));

    });


});

