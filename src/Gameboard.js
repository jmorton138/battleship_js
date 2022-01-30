import Ship from './Ship';

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

    const placeAllShips = () => {
        const array1 = [[0,1],[0,2],[0,3]];
        const ship1 = Ship(array1);
        const ship2 = Ship([[3,2], [3,3]]);
        placeShip(ship1);
        placeShip(ship2);
        
    }


    const receiveAttack = (coords) => {
        const x = coords[0];
        const y = coords[1];

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

    const validateMove = () => {

    }
    let grid = createGrid(size);
    let shipGrid = createGrid(size);
    placeAllShips();

    return {grid, placeShip, receiveAttack, allShipsSunk, shipGrid}
}

export default Gameboard;