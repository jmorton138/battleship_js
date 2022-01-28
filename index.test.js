const Ship = require('./Ship');
const Gameboard = require('./Gameboard');

describe('Ship function', () => {
    test('returns array of [0,1] when given this array as param', () => {
        expect(Ship([[0,1], [0, 2]]).coordinates).toStrictEqual([[0,1],[0,2]]);
    })

    test('Pushes [2,3], [2,4] to hitCoords when hit at position [2,3] and [2,4]', () => {
        const ship = Ship([[2,3],[2,4]])
        expect(ship.hitCoords).toStrictEqual([]);
        ship.hit([2,3]);
        ship.hit([2,4]);
        expect(ship.hitCoords).toStrictEqual([[2, 3], [2,4]]);
    });
    
    test('isSunk returns false if any unhit coordinates', () => {
        const ship = Ship([[2,3],[2,4]]);
        ship.hit([2,3]);

        expect(ship.isSunk()).toBe(false);
    });

    test('isSunk returns true if no unhit coordinates', () => {
        const ship = Ship([[2,3],[2,4]]);
        ship.hit([2,3]);
        ship.hit([2,4]);
        expect(ship.isSunk()).toBe(true);
    });
});




describe('Gameboard function', () => {

    test('grid function returns 10 x 10 length array on initialize', () => {
        console.log(Gameboard().grid)
    });

    test('Places ship at coordinates on grid with single coord ship', () => {
        const ship = Ship([0,0]);
        const game = Gameboard(4);
        game.placeShip(ship);
        expect(game.grid[0]).toStrictEqual(expect.arrayContaining(["0", 1, 2, 3]));
    });

    // test("receiveAttack returns false if coordinate isn't a hit", () => {
    //     const x = 1;
    //     const y = 1;
    //     let game = Gameboard();
    //     test(game.receiveAttack(x, y)).toBe(false);
    // })


});

