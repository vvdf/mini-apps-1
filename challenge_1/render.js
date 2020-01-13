class Render {
  constructor() {
    this.init();
  }

  init() {
    // initial render of a blank board
    var game = select('game');
    var board = create('div');

    // populate rows with divs
    for (var i = 0; i < 3; i++) {
      // generate rows with divs
      var row = create('div');
      row.id = 'row' + i;

      for (var j = 0; j < 3; j++) {
        var cell = create('span');
        cell.id = `cell (${i},${j})`;
        cell.innerHTML = 'X';
        row.append(cell);
      }
      
      // populate board with created row divs
      board.append(row);
    }

    game.append(board);
  }
}