const mouseOverHoriz = (len, id, num) => {
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
    for(i; i < len; i++) {
        let coords = [];
        coords[x] = id[x];
        coords[y] = i;
        document.getElementById(`p1:${coords}`).classList.add("place-ship-hover");
    }
}

export default mouseOverHoriz;
