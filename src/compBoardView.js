import Game from './Game';

const compBoardView = (game) => {
    const content = document.querySelector("#comp-board");
    content.innerHTML = "";
    game.p2Board.grid.forEach((row, x) => {
        row.forEach((item, y) => {
            const div = document.createElement('div');
            div.textContent = item;
            div.className = "cell";
            const coords = [x, y];
            div.addEventListener('click', function(){
                game.gameLoop(coords);
                compBoardView(game);
            });
            //remove onclick after firing
            content.appendChild(div);
        }

        )
    })
}


export default compBoardView;