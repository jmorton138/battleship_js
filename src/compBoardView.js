import Game from './Game';
import updateCellView from './updateCellView';

const compBoardView = (game) => {
    const content = document.querySelector("#comp-board");
    content.innerHTML = "";
    game.p2Board.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const div = document.createElement('div');
            div.textContent = item;
            div.className = "cell";
            const coords = [x, y];
            div.id = coords;
            div.addEventListener('click', function() {
                if(game.gameLoop(coords) === "game over") {
                    return;
                } else {
                    compBoardView(game);
                }
            });
            //remove onclick after firing
            content.appendChild(div);
        }

        )
    })
}


export default compBoardView;