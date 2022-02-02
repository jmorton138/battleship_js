import mouseOver from "./mouseOver";
import mouseOut from "./mouseOut";
import getShipArray from "./getShipArray";
import Ship from "./Ship";
import PlayerBoardView from "./playerBoardView";
import compBoardView from "./compBoardView";


const placeShipsView = (game, i = 0, num = 1) => {
    const playerinfo = document.querySelector('.player-info');
    const compinfo = document.querySelector('.comp-info');
    const compBoard = document.querySelector('#comp-board');
    const waitmessage = document.createElement('h3');
    waitmessage.className ="wait-msg";
    waitmessage.textContent = "Waiting...";
    compBoard.appendChild(waitmessage);
    playerinfo.innerHTML = "";
    compinfo.innerHTML = ""
    if (i > 4) {
        document.querySelector('.player-info').innerHTML = "";
        playerinfo.textContent = `Score: ${game.p1Board.score}`;
        compBoardView(game);
        return;
    }

    let shipLen = [5, 4, 3, 3, 2];
    //setup player info interface
    const p = document.createElement('p');
    p.textContent = "Place your pieces.";
    playerinfo.appendChild(p);
    const rotate = document.createElement('button');
    rotate.textContent = "Rotate";
    rotate.id = "rotate";
    playerinfo.appendChild(rotate);

    //setup comp info interface 
    const compP = document.createElement('p');
    compP.textContent = "Waiting for you to place your pieces.";
    compinfo.appendChild(compP);

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
                const array = getShipArray(shipLen[i], coords, num)
                if (array !== false) {
                    const ship = Ship(array);
                    game.p1Board.placeShip(ship);
                    PlayerBoardView(game.p1Board);
                    i++;
                }
                placeShipsView(game, i, num);

 
            } 
        })
    });
}

export default placeShipsView;