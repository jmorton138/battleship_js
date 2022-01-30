const Ship = (array) => {
    
    let coordinates = array;
    // Make sure the array is structured properly as nested arrays
    let hitCoords = [];
    const shipLength = array.length;

    const hit = (position) => {
        hitCoords.push(position);
    }


    const isSunk = () => {
        let counter = 0;
        if(coordinates.length === hitCoords.length) {
            for (let i = 0; i < coordinates.length; i++) {
                for(let j = 0; j < hitCoords.length; j++) {
                    if (coordinates[i][j] == hitCoords[i][j]) {
                        counter ++;
                    }
                }
            }
            if (counter === (coordinates.length * 2)) {
                return true;
            } else {
                return false;
            }
        } else if (coordinates.length !== hitCoords.length){
            return false;
        }

    }

    return {shipLength, coordinates, hit, isSunk, hitCoords}
}

module.exports = Ship;