const getShipArray = (len, id, num) => {
    let x;
    let y;
    if (num % 2 === 0) {
        y = 0;
        x = 1;
    } else {
        x = 0;
        y = 1;
    }

    let i = id[y];
    len = i + len;
    let array = [];
    if (len > 10) {
        return false;
    }
    for(i; i < len; i++) {
        let coords = [];
        coords[x] = id[x];
        coords[y] = i;
        const cell = document.getElementById(`p1:${coords}`);
        if (cell.textContent === "ship") {
            return false
        } else {
            array.push(coords);
        }
    }
    return array;
}

export default getShipArray;