const mouseOverHoriz = (len, id) => {
    let i = id[1];
    len = i + len;
    for(i; i < len; i++) {
        let coords = [];
        console.log(i);
        coords[0] = id[0];
        coords[1] = i;
        console.log(coords);
        document.getElementById(coords).style.background ="red";
    }
}

export default mouseOverHoriz;
