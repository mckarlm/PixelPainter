var pixelPainter = (function (width, height){
  var grid = document.getElementById('pixelPainter');

  for (let i=0; i<width; i++){
    for (let j=0; j<height; j++){
      var canvas = document.createElement('div');
      canvas.className = 'cell'
      /*var canvasCell;

      canvasCell = document.createElement('div');
      canvasCell.className = 'cell';
      grid.appendChild(canvasCell);*/
      grid.appendChild(canvas);
      /*canvas.style.height = height * 10
      canvas.style.width = width * 10
      grid.style.height = canvas.style.height * 10
      grid.style.width = canvas.style.width * 10*/
    }
  }

})(10, 10)