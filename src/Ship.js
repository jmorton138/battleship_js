const Ship = (array) => {
    
    const coordinates = array;
    // Make sure the array is structured properly as nested arrays
    let hitCoords = [];
    const shipLength = array.length;

    const hit = (position) => {
        hitCoords.push(position);
    }


    const isSunk = () => {
        let counter = 0;
        console.log(coordinates);
        console.log(hitCoords);
        if(coordinates.length === hitCoords.length) {
            for (let i = 0; i < coordinates.length; i++) {
                for(let j = 0; j < hitCoords.length; j++) {
                    if (coordinates[i][0] === hitCoords[j][0] && coordinates[i][1] === hitCoords[j][1]) {
                        counter ++;
         
                    }
                }
            }
            if (counter === (coordinates.length)) {
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

export default Ship;
