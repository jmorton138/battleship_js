const gameOverView = (message) => {
    const gameover = document.querySelector('.game-over');
    const h2 = document.createElement('h2');
    h2.textContent = message;
    gameover.appendChild(h2);

} 

export default gameOverView;