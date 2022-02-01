import Game from './Game';
import displayCellView from './displayCellView';

const compBoardView = (game) => {
    const content = document.querySelector("#comp-board");
    content.innerHTML = "";
    game.p2Board.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const div = document.createElement('div');
            const coords = [x, y];
            div.id = coords;
            div.className = "cell";
            div.addEventListener('click', function() {
                if(game.gameLoop(coords) === "game over") {
                    return;
                } else {
                    compBoardView(game);
                }
            });
            //remove onclick after firing
            content.appendChild(div);
            displayCellView(coords, item);

        }

        )
    })
}


export default compBoardView;