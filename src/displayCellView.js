const displayCellView = (coords, item) => {
    const cell = document.getElementById(coords);
    if (item === "hit") {
        cell.textContent = "hit";
        return "hit";
    } else if (item === "miss") {
        cell.textContent = "miss";
        return "miss";
    } else {
        cell.textContent = "";
        return " ";
    }

}

export default displayCellView;