
const CompPlayer = () => {
    const type = "comp";
    let score = 0;

    const getCoords = () => {
        let x;
        let y;
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        const array = [x, y];
        return array;
    }


    return {getCoords, type, score}
}

export default CompPlayer;