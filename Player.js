const Player = (num, gameboard) => {
    const board = gameboard;
    let playedMoves  = [];

    const assignType = (num) => {
        if (num === 1) {  
            return "human";
        } else {
            return "comp";
        }
        

    }

    const getCoords = (coords) => {
        let x;
        let y;
        if (type === "comp") {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            const array = [x, y];
            return array
        } else if (type === "human") {
            x = coords[0]; 
            y = coords[1];
            const array = [x, y];
            return array;
        }
    }


    const type = assignType(num);
    
    return {getCoords}
}

module.exports = Player;