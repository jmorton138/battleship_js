const Gameboard = require('./Gameboard');
const Player = require('./Player');

const Game = () => {
    //initialize gameboards
    const p1Board = Gameboard();
    const p2Board = Gameboard();
    //initialize players
    const p1 = Player(1, p2Board);
    const p2 = Player(2, p1Board);
    //place ships

    

   

    const isGameOver = () => {

    }

    const gameLoop = () => {

        //player attack
        //receive attack
        //if receive attack
            //issunk?
            //updates scores
        //game over?
        //comp attack
        //validate comp move
        //gameover?
        
    }

}