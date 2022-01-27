const Gameboard = (size = 100) => {
    let grid;
    const createGrid = (size) => {
        let array = []
        for (let i = 0; i < size; i++) {
            array.push(i);
        }
        grid = array;
        return grid
    }

    const placeShip = (ship) => {
        const shipCoord = ship.coordinates;

        for (let i = 0; i < shipCoord.length; i++) {
            let coord = shipCoord[i];
            grid[coord] = "X";
        }
        return grid;

    }
    createGrid(size);

    return {grid, placeShip}
}

module.exports = Gameboard;