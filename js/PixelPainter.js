var pixelPainter = (function (width, height){
  var grid = document.getElementById('pixelPainter');

  let paint = 'black';
  


  function setColor(event){
    const cell = event.target;
    cell.style.backgroundColor = paint;
  }

  //Makes the grid//
  //can't be adjusted user-side yet//
  for (let i=0; i<width; i++){
    for (let j=0; j<height; j++){
      var canvas = document.createElement('div');
      canvas.className = 'cell'
      canvas.addEventListener('click', setColor);
      grid.appendChild(canvas);
     
      /*var canvasCell;

      canvasCell = document.createElement('div');
      canvasCell.className = 'cell';
      grid.appendChild(canvasCell);
    
      canvas.style.height = height * 10
      canvas.style.width = width * 10
      grid.style.height = canvas.style.height * 10
      grid.style.width = canvas.style.width * 10*/
    }
  }

})(10, 10)

//media query//