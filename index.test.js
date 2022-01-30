const Ship = require('./src/Ship');
const Gameboard = require('./src/Gameboard');
const Player = require('./src/Player');



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
        // console.log(Gameboard().grid)
    });

    test('Places ship at coordinates on grid with single coord ship', () => {
        const ship = Ship([[0,0]]);
        const game = Gameboard(4);
        game.placeShip(ship);
        expect(game.grid[0]).toStrictEqual(expect.arrayContaining(["ship", 1, 2, 3]));
    });

    test('Places ship at coordinates on grid with doub coord ship', () => {
        const ship = Ship([[0,0], [0,1]]);
        const game = Gameboard(4);
        game.placeShip(ship);
        expect(game.grid[0]).toStrictEqual(expect.arrayContaining(["ship", "ship", 2, 3]));
    });

    test('Places ship at coordinates on grid with trip coord ship vertical', () => {
        const ship = Ship([[0,1], [1,1], [2,1]]);
        const game = Gameboard(3);
        game.placeShip(ship);
        expect(game.grid).toEqual(expect.arrayContaining([
            [0, "ship", 2],
            [0, "ship", 2],
            [0, "ship", 2]]
        
        ));
    });

    test('When attack is a hit receiveAttack updates appropriate ship and grid space', () => {
        const ship = Ship([[0,1], [1,1], [2,1]]);
        const game = Gameboard(3);
        game.placeShip(ship);
        game.receiveAttack([1, 1]);
        expect(ship.hitCoords).toStrictEqual([[1,1]]);
        expect(game.grid[1][1]).toEqual("hit");

    });

    test('When attack is a miss receiveAttack updates appropriate grid space', () => {
        const ship = Ship([[0,1], [1,1]]);
        const game = Gameboard(3);
        game.placeShip(ship);
        game.receiveAttack([2, 1]);
        expect(ship.hitCoords).toStrictEqual([]);
        expect(game.grid[2][1]).toEqual("miss");
    });

    test('allShipsSunk returns false when ships still on board', () => {
        const ship = Ship([[0,1], [1,1]]);
        const game = Gameboard(3);
        game.placeShip(ship);
        expect(game.allShipsSunk()).toBe(false);
    })

    test('allShipsSunk returns true when all ships sunk', () => {
        const ship = Ship([[0,1], [1,1]]);
        const game = Gameboard(3);
        game.placeShip(ship);
        game.receiveAttack([0, 1]);
        game.receiveAttack([1, 1]);
        expect(game.allShipsSunk()).toBe(true);
    })

    test('allShipsSunk returns true when all ships sunk (multiples on board)', () => {
        const ship = Ship([[0,1], [1,1]]);
        const ship1 = Ship([[2,2], [2,3]]);
        const game = Gameboard();
        game.placeShip(ship);
        game.receiveAttack([0, 1]);
        game.receiveAttack([1, 1]);
        game.receiveAttack([2, 2]);
        game.receiveAttack([2, 3]);
        expect(game.allShipsSunk()).toBe(true);
    })

});

describe('Player function', () => {
    test('attacks enemy gameboard at [0, 1]', () => {
        const p2Board = Gameboard();
        const p1 = Player(1, p2Board);
        const coords = p1.getCoords([0,1]);
        console.log(coords);
        p2Board.receiveAttack(coords);
        expect(p2Board.grid[0][1]).toBe("miss");
    });

    test('computer attacks enemy gameboard case works', () => {
        const p1Board = Gameboard();
        const p2 = Player(2, p1Board);
        const coords = p2.getCoords();
        console.log(coords);
        const x = coords[0];
        const y = coords[1];
        p1Board.receiveAttack(coords);
        expect(p1Board.grid[x][y]).toBe("miss");
    });
});

