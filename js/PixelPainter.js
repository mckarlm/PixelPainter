var pixelPainter = (function (width, height){
  var grid = document.getElementById('pixelPainter');
  var canvasDiv = document.createElement('div');
  var paletteDiv = document.createElement('div');

  let currentColor = 'black';

  function setColor(event){
    const cell = event.target;
    cell.style.backgroundColor = currentColor;
  };

  canvasDiv.className = 'canvasDiv';
  grid.appendChild(canvasDiv);

  paletteDiv.className = 'paletteDiv';
  grid.appendChild(paletteDiv);
  
  let paintHeight = 10;
  let paintWidth = 10;
  
  function makePalette(){
    for (let k=0; k<paintHeight; k++){
      for (let l=0; l<paintWidth; l++){
        let paintCell = document.createElement('div');
        paintCell.className = 'changeColor'
        paletteDiv.appendChild(paintCell);
      }
    }
  }
  makePalette();

  
  let clearCanvas = document.createElement('button');
  clearCanvas.className = 'clearButton';
  clearCanvas.innerHTML = 'Reset Canvas';
  clearCanvas.addEventListener('click', clearCanvasFunc);
  paletteDiv.appendChild(clearCanvas);

  
  function clearCanvasFunc(event){
    const cell = event.target;
    document.querySelectorAll(cell).style.backgroundColor = 'white'
  }
  

/*
//?????//
  for (let k=0; k<5; k++){
    var makePalette = document.createElement('div');
    makePalette.className = 'palette';
    paletteDiv.appendChild(makePalette);
  };
*/

  //Makes the grid//
  //can't be adjusted user-side yet//
  for (let i=0; i<width; i++){
    for (let j=0; j<height; j++){
      var makeGrid = document.createElement('div');
      //var makePalette = document.createElement('div');

      makeGrid.className = 'canvas';
      makeGrid.addEventListener('click', setColor);
      canvasDiv.appendChild(makeGrid);
    }
  }

})(8, 8)

//media queries//