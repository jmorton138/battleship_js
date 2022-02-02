
const CompPlayer = () => {
    const type = "comp";

    const getCoords = () => {
        let x;
        let y;
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        const array = [x, y];
        return array;
    }


    return {getCoords, type}
}

export default CompPlayer;