import Game from "./Game";
const PlayerBoardView = (gameboard) => {
    const content = document.querySelector("#player-board");
    content.innerHTML = "";
    const playerinfo = document.querySelector('.player-info');
    playerinfo.textContent = `Score: ${gameboard.score}`;
    gameboard.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const div = document.createElement('div');
            if (item === "ship" || item === "miss" || item === "hit") {
                div.textContent = item;
            } else {
                div.textContent = " ";
            }
            div.className = "cell";
            const coords = [x, y];
            div.id = `p1:${coords}`;
            content.appendChild(div);
        }

        )
    })
} 

export default PlayerBoardView;