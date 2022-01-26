const Ship = (array) => {
    
    let coordinates = array;

    const shipLength = () => {
        return array.length;
    }


    const hit = (position) => {
        const index = coordinates.indexOf(position);
        coordinates[index] = "hit";
        return coordinates;
    }

    const isSunk = () => {
        if(coordinates.every((element) => element === "hit")) {
            return true;
        } else {
            return false;
        }
    }

    return {shipLength, coordinates, hit, isSunk}
}

module.exports = Ship;