let numOfCells = prompt('How many cells do you want?');
let loop = true

while (loop === true) {
    
    if (numOfCells > 64) {
        numOfCells = prompt('Choose a number smaller than 64');
        
    }

    else if (numOfCells < 0) {
        numOfCells = prompt('Choose a number greater than 0');
        
    }

    else if (numOfCells > 0 && numOfCells < 64) {
        if (numOfCells % 2 != 0) {
            numOfCells = numOfCells++;
            loop = false;
        }
        else {
            loop = false;
        }
    }
}

