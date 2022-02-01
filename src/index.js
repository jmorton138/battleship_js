import Gameboard from './Gameboard';
import Game from './Game';
import compBoardView from './compBoardView';
import './styles.css';
import PlayerBoardView from './playerBoardView';
import placeShipsView from './placeShipsView';

function main() {
    const game = Game();

    document.addEventListener('DOMContentLoaded', () => {

        PlayerBoardView(game.p1Board);
        placeShipsView(game);
        const reset = document.querySelector('#reset');
        reset.onclick = () => {
            const newGame = Game();
            document.querySelector('.game-over').innerHTML ="";
            const compboard = document.querySelector("#comp-board");
            compboard.innerHTML ="";
            PlayerBoardView(newGame.p1Board);
            placeShipsView(newGame);

        };

            
    });

}


main();

export default main;



