const updateCellView = (coords) => {
    console.log(coords);
    const cell = document.getElementById(coords);
    cell.textContent = "hit";

}

export default updateCellView;