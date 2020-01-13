class Render {
  constructor() {
    this.init();
  }

  init() {
    // initial render of a blank board
    var game = select('game');
    var board = create('div');
    board.id = "board";

    // populate rows with divs
    for (var y = 0; y < 3; y++) {
      // generate rows with divs
      var row = create('div');
      row.className = 'row';

      for (var x = 0; x < 3; x++) {
        var cell = create('div');
        cell.className = 'cell';
        cell.id = `${x},${y}`
        cell.innerHTML = '';
        row.append(cell);
      }
      
      // populate board with created row divs
      board.append(row);
    }

    game.append(board);
    this.drawGrid();
  }

  drawGrid() {
    var borderStyle = '1px solid black';
    for (var y = 0; y < 3; y++) {
      for (var x = 0; x < 3; x++) {
        // select a given cell
        var cell = select(`${x},${y}`);
        var border = '';

        // check for all internal edges to add a border to
        // using Element.setAttribute(name, value)
        if (x > 0) { 
          border += 'border-left: ' + borderStyle + '; ';
        };
        if (x < 2) { 
          border += 'border-right: ' + borderStyle + '; ';
        };
        if (y > 0) { 
          border += 'border-top: ' + borderStyle + '; ';
        };
        if (y < 2) { 
          border += 'border-bottom: ' + borderStyle + '; ';
        };

        cell.setAttribute('style', border);
      }
    }
  }
}