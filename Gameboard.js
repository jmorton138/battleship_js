const Gameboard = (size = 10) => {
    let grid;


    const createGrid = (size) => {
        let array = []
        for (let i = 0; i < size; i++) {
            let xArray = []
            for (let j = 0; j < size; j++) {
                xArray.push(j);
            }
            array.push(xArray);
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

    }
    createGrid(size);

    return {grid, placeShip}
}

module.exports = Gameboard;