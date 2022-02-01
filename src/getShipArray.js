const getShipArray = (len, id) => {
    let i = id[1];
    len = i + len;
    let array = [];
    if (len > 10) {
        return false;
    }
    for(i; i < len; i++) {
        let coords = [];
        coords[0] = id[0];
        coords[1] = i;
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