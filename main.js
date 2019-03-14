var gridSize = 32; 
var grid = document.getElementById('grid');

var temp;

const resetBtn = document.createElement('BUTTON');
resetBtn.appendChild(document.createTextNode("CLEAR"));

const input = document.createElement('input');
input.setAttribute('type','text');


function initEAS(){
    resetBtn.addEventListener("click", rebuildGrid);
    document.body.insertBefore(resetBtn, document.body.firstChild);
    document.body.insertBefore(input, document.body.firstChild);
    initGrid();
}

function initGrid(){
    
    let area = gridSize*gridSize;
    for(i = 0; i < area; i++){
        temp = document.createElement('div');
        temp.className = 'gridNode';

        grid.style.setProperty('--gridSize', gridSize);

        input.setAttribute('value','NEW GRID SIZE');

        temp.addEventListener('mouseover', onHover);
        document.getElementById('grid').appendChild(temp);
        
    }
}

function onHover(e){
    e.target.classList.add('turnBlack');
}

function rebuildGrid(){
    let parsedInput = parseInt(input.value);
    if(parsedInput){
        gridSize = parsedInput;
    }
    console.log("rebuilding grid");
    destroyGrid();
    initGrid();
}

function destroyGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

initEAS();
