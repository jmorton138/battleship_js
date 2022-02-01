import mouseOver from "./mouseOver";
import mouseOut from "./mouseOut";
import getShipArray from "./getShipArray";
import Ship from "./Ship";
import PlayerBoardView from "./playerBoardView";
import compBoardView from "./compBoardView";


const placeShipsView = (game, i = 0) => {
    if (i > 4) {
        document.querySelector('#rotate').style.display = "none";
        compBoardView(game);
        return;
    }

    let shipLen = [5, 4, 3, 3, 2];
    const rotate = document.querySelector('#rotate');
    let num = 1;
    rotate.onclick = () => { 
        num++;
    }
    //create grid and add mouse over event to each cell
    game.p1Board.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const coords = [x, y];
            const div = document.getElementById(`p1:${coords}`);
            div.onmouseover = () => mouseOver(shipLen[i], coords, num);
            div.onmouseout = () => mouseOut(shipLen[i], coords, num);
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