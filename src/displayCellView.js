const displayCellView = (coords, item) => {
    const cell = document.getElementById(coords);
    if (item === "hit") {
        cell.textContent = "X";
        cell.style.color = "red";
        cell.style.background = "#2f3030"
        return "hit";
    } else if (item === "miss") {
        cell.innerHTML = '<i class="fas fa-water"></i>';
        cell.style.color = "navy";
        return "miss";
    } else {
        cell.textContent = "";
        return " ";
    }

}

export default displayCellView;