import mouseOverHoriz from "./mouseOverHoriz";
import mouseOutHoriz from "./mouseOutHoriz";
import getShipArray from "./getShipArray";
import Ship from "./Ship";
import PlayerBoardView from "./playerBoardView";
import compBoardView from "./compBoardView";


const placeShipsView = (game, i = 0) => {
    if (i > 4) {
        compBoardView(game);
        return;
    }
    let shipLen = [5, 4, 3, 3, 2];
    //create grid and add mouse over event to each cell
    game.p1Board.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const coords = [x, y];
            const div = document.getElementById(`p1:${coords}`);
            div.onmouseover = () => mouseOverHoriz(shipLen[i], coords);
            div.onmouseout = () => mouseOutHoriz(shipLen[i], coords);
            div.onclick = function() {
                const array = getShipArray(shipLen[i], coords)
                if (array !== false) {
                    const ship = Ship(array);
                    game.p1Board.placeShip(ship);
                    PlayerBoardView(game.p1Board);
                    i++;
                }
                placeShipsView(game, i);

 
            } 
        })
    });
}

export default placeShipsView;