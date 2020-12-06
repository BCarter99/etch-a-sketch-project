const container = document.getElementById('cell-container');

let numOfCells = prompt('How many rows and columns do you want?');

let loop = true

while (loop === true) {
    
    if (numOfCells > 64) {
        numOfCells = prompt('Choose a number smaller than 64');
        
    }

    else if (numOfCells < 0) {
        numOfCells = prompt('Choose a number greater than 0');
        
    }

    else if (0 < numOfCells && numOfCells < 64) {
        if (numOfCells % 2 != 0) {
            numOfCells++;
            loop = false;
        }
        else {
            loop = false;
        }
    }
}

let rows = numOfCells;
let cols = numOfCells;
let x = 1;

function makeGrid(rows, cols) {
    for (r = 0; r < rows; r++) {
        container.style.setProperty('--rowNum', rows);
        container.style.setProperty('--colNum', cols);
        for (c = 1; c <= (rows); c++) {
            let cell = document.createElement('div');
            cell.id = 'grid-item' + x;
            container.appendChild(cell).className = 'grid-item';
            x++
        }
    }
}

if (numOfCells) {
    makeGrid(numOfCells, numOfCells);
}
else {
    makeGrid(16, 16);
}

x = 1;

for (i = 1; i <= (numOfCells * numOfCells); i++) {
    let gridItem = document.getElementsById('grid-item');
    gridItem.addEventListener('moveover', function(e) {
        gridItem.style.backgroundColor = 'black';
        x++
    })
}