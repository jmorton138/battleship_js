const CompPlayer = (gameboard) => {
    const type = "comp";
    const board = gameboard;
    let playedMoves  = [];
    const getCoords = (coords) => {
        let x;
        let y;
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        const array = [x, y];
        return array
    }
    return {getCoords, type}
}

export default CompPlayer;