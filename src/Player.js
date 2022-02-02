const Player = (gameboard) => {
    const board = gameboard;
    let playedMoves  = [];
    const type = "human";
    let score = 0;

    const getCoords = (coords) => {
        let x;
        let y;
        x = coords[0]; 
        y = coords[1];
        const array = [x, y];
        return array;
    }


    
    return {getCoords, type, score}
}

export default Player;
