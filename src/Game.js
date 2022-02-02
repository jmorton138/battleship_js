import Gameboard from './Gameboard';
import Player from './Player';
import CompPlayer from './CompPlayer';
import PlayerBoardView from './playerBoardView';
import gameOverView from './gameOverView';
import displayCellView from './displayCellView';


const Game = () => {
    //initialize gameboards
    const p1Board = Gameboard();
    const p2Board = Gameboard();
    p2Board.placeCompShips();
    //initialize players
    const p1 = Player(1, p2Board);
    const p2 = CompPlayer();
    //place ships

    // const object = {
    //     board1: Gameboard(),
    //     board2: Gameboard(),
    //     p1: Player(1, p2Board),
    //     p2: Player(2, p1Board)
    // }


    const gameLoop = (coords) => {
        //game over?
        if (p2Board.allShipsSunk() || p1Board.allShipsSunk()) {
            return "game over";
        }
        //comp receives attack
        const x = coords[0];
        const y = coords[1];
        if(p2Board.validateCoords(coords) === false) {
            return;
        }
        const attackReceived2 = p2Board.receiveAttack(coords);

        if (attackReceived2 === "hit") {
            displayCellView(coords, "hit");
            const ship2 = p2Board.shipGrid[x][y];
            if (ship2.isSunk() === true) {
                //updates scores
                p1.score++;
            }
    
        }
        //game over?
        if (p2Board.allShipsSunk()) {
            const message = "You win."
            gameOverView(message);
            return "game over";
        }
        //comp attack until valid
        let compAttack = p2.getCoords();
        while(p1Board.validateCoords(compAttack) === false) {
            compAttack = p2.getCoords();
        }
        const attackReceived1 = p1Board.receiveAttack(compAttack);
        if (attackReceived1 === "hit") {
            const a = compAttack[0];
            const b = compAttack[1];
            const ship1 = p1Board.shipGrid[a][b];
            if (ship1.isSunk()) {
                p2.score++;
                console.log(p2.score)
            }
        }

 
        PlayerBoardView(p1Board);
        //gameover?
        if (p1Board.allShipsSunk()) {
            const message = "Game over man! You lose.";
            gameOverView(message);
            return "game over";

        }
        


        
    }
    return {gameLoop, p1Board, p2Board, p1, p2};
}

export default Game;