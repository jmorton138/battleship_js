import Gameboard from './Gameboard';
import Game from './Game';
import compBoardView from './compBoardView';
import './styles.css';
const game = Game();


// window.addEventListener('load', () => {
//     compBoardView(game);
//     console.log("loaded");
//     // renderBoardView(grid, "#comp-board");
// })
document.addEventListener('DOMContentLoaded', () => {
    compBoardView(game);

})


