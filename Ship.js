const Ship = (array) => {
    
    let coordinates = array;

    const shipLength = () => {
        return array.length;
    }


    const hit = (position) => {
        const index = coordinates.indexOf(position);
        coordinates[index] = "hit";
    }

    const isSunk = () => {
        if(coordinates.every((element) => element === "hit")) {
            return true;
        } else {
            return false;
        }
    }

    return {shipLength, coordinates, isSunk}
}

module.exports = Ship;