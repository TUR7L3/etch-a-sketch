var gridSize = 16; 
var grid = document.getElementById('grid');

var temp;

function initGrid(){
    
    let area = gridSize*gridSize;
    for(i = 0; i < area; i++){
        temp = document.createElement('div');
        temp.className = 'gridNode';
        temp.addEventListener('mouseover', onHover);
        document.getElementById('grid').appendChild(temp);
        
    }
}

function onHover(e){
    e.target.classList.add('turnBlack');
}

function rebuildGrid(){
    
    
    
    destroyGrid();
    initGrid();
}

function destroyGrid(){

}

initGrid();
