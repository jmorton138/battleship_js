import Game from "./Game";
const PlayerBoardView = (gameboard) => {
    const content = document.querySelector("#player-board");
    content.innerHTML = "";
    const playerinfo = document.querySelector('.player-info');
    playerinfo.textContent = `Score: ${gameboard.score}`;
    gameboard.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const div = document.createElement('div');

            if (item === "ship") {
                div.style.background = "silver";
                div.textContent = " ";
            } else if (item === "miss") {
                div.innerHTML = `<i class="fas fa-water"></i>`;
                div.style.color = "navy";

            }  else if (item === "hit") {
                div.textContent = "X";
                div.style.background = "#2f3030";
                div.style.color = "red";
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