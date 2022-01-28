const Gameboard = (size = 10) => {

    const createGrid = (size) => {
        let grid;
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
            //updates controller grid
            grid[x][y] = "ship";
            //stores instance of ship in seperate grid
            shipGrid[x][y] = ship;
        }
    }

    const receiveAttack = (x, y) => {
        //hit successful?
        if (grid[x][y] === "ship") {
            grid[x][y] = "hit";
            //hit to correct ship
            shipGrid[x][y].hit([x, y]);
            return "hit";
        } else {
            // mark a miss
            grid[x][y] = "miss";
            return "miss";
        }
        
    }

    const allShipsSunk = () => {
        for(let i=0; i <  grid.length; i++) {
            if(grid[i].includes("ship")) {
                return false;
            }            
        }
        return true;
    }

    let grid = createGrid(size);
    let shipGrid = createGrid(size);

    return {grid, placeShip, receiveAttack, allShipsSunk}
}

module.exports = Gameboard;