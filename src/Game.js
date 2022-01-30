import Gameboard from './Gameboard';
import Player from './Player';
import CompPlayer from './CompPlayer';
import PlayerBoardView from './playerBoardView';

const Game = () => {
    //initialize gameboards
    const p1Board = Gameboard();
    const p2Board = Gameboard();
    //initialize players
    const p1 = Player(1, p2Board);
    const p2 = CompPlayer(2, p1Board);
    //place ships

    // const object = {
    //     board1: Gameboard(),
    //     board2: Gameboard(),
    //     p1: Player(1, p2Board),
    //     p2: Player(2, p1Board)
    // }

   

    const isGameOver = () => {

    }

    const gameLoop = (coords) => {
        
        //comp receives attack
        const x = coords[0];
        const y = coords[1];
        const attackReceived = p2Board.receiveAttack(coords)
        if (attackReceived === "hit") {
            const ship = p2Board.shipGrid[x][y];
            if (ship.isSunk());
                //updates scores
        }
        //game over?
        if (p2Board.allShipsSunk()) {
            console.log("game over");
        }
        //comp attack until valid
        const compAttack = p2.getCoords();
        p1Board.receiveAttack(compAttack);
        PlayerBoardView(p1Board);
        

        //gameover?

        
    }
    return {gameLoop, p1Board, p2Board, p1, p2};
}

export default Game;