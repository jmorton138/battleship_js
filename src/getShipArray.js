const getShipArray = (len, id) => {
    let i = id[1];
    len = i + len;
    let array = [];
    for(i; i < len; i++) {
        let coords = [];
        coords[0] = id[0];
        coords[1] = i;
        array.push(coords);
    }
    return array;
}

export default getShipArray;