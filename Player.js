const Player = (num) => {
    const type;

    const assignType = (num) => {
        if (num === 1) {
            type = "human";
        } else {
            type = "comp";
        }
    }

    const attack = () => {
        //grab players move

        return coords;
    }

    assignType(num);

    return {attack, type}
}

module.exports = Player;