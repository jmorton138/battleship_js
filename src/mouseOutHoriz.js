const mouseOutHoriz = (len, id) => {
    let i = id[1];
    len = i + len;
    for(i; i < len; i++) {
        let coords = [];
        coords[0] = id[0];
        coords[1] = i;
        document.getElementById(`p1:${coords}`).classList.remove("place-ship-hover");
    }
}

export default mouseOutHoriz;