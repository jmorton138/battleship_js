const renderBoardView = (grid, divId) => {
    const content = document.querySelector(divId);
    console.log(content);
    content.innerHTML = "";
    grid.forEach((row) => {
        row.forEach((item) => {
            const div = document.createElement('div');
            div.textContent = item;
            content.appendChild(div);
        }

        )
    })
}


module.exports = renderBoardView;