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
        for (let i=0; i < shipCoord.length; i++) {
            let x = shipCoord[i][0];
            let y = shipCoord[i][1];
            grid[x][y] = "0";
        }

 

  

    }
    createGrid(size);

    return {grid, placeShip}
}

module.exports = Gameboard;