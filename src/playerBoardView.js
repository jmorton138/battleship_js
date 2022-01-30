import Game from "./Game";
const PlayerBoardView = (gameboard) => {
    const content = document.querySelector("#player-board");
    content.innerHTML = "";
    gameboard.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const div = document.createElement('div');
            div.textContent = item;
            div.className = "cell";
            const coords = [x, y];
            content.appendChild(div);
        }

        )
    })
} 

export default PlayerBoardView;