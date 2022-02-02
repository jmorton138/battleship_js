const Player = (gameboard) => {
    const board = gameboard;
    let playedMoves  = [];
    const type = "human";

    const getCoords = (coords) => {
        let x;
        let y;
        x = coords[0]; 
        y = coords[1];
        const array = [x, y];
        return array;
    }


    
    return {getCoords, type}
}

export default Player;
