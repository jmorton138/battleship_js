import mouseOverHoriz from "./mouseOverHoriz";
import mouseOutHoriz from "./mouseOutHoriz";

const placeShipsView = (gameboard, i = 0) => {
    let shipLen = [5, 4, 3, 3, 2];
    //create grid and add mouse over event to each cell
    gameboard.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const coords = [x, y];
            const div = document.getElementById(`${coords}`);
            div.onmouseover = () => mouseOverHoriz(shipLen[i], coords);
            div.onmouseout = () => mouseOutHoriz(shipLen[i], coords);
        })
    });
    // add onclick event that does same thing as mouseover,
    // but on backend and calls placeships
    //once array/all ships have been placed, returns

}

export default placeShipsView;