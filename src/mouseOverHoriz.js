const mouseOverHoriz = (len, id) => {
    let i = id[1];
    len = i + len;
    let array = [];
    for(i; i < len; i++) {
        let coords = [];
        coords[0] = id[0];
        coords[1] = i;
        array.push(coords);
        document.getElementById(`p1:${coords}`).classList.add("place-ship-hover");
    }
    return array;
}

export default mouseOverHoriz;
