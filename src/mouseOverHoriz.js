const mouseOverHoriz = (len, id) => {
    let i = id[1];
    len = i + len;
    for(i; i < len; i++) {
        let coords = [];
        coords[0] = id[0];
        coords[1] = i;
        document.getElementById(coords).classList.add("place-ship-hover");
    }
}

export default mouseOverHoriz;
