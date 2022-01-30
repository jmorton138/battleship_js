const Gameboard = require('./Gameboard');
const renderBoardView = require('./renderBoardView');
import './styles.css';

window.addEventListener('load', () => {
const grid = Gameboard().grid;
renderBoardView(grid, "#player-board")
renderBoardView(grid, "#comp-board");
})


