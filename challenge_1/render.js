class Render {
  constructor() {
    this.init();
  }

  init() {
    // initial render of a blank board
    this.drawUpperUI();
    this.drawBoard();
    this.drawGrid();
    this.drawLowerUI();
    // this.drawNameEntry();
    this.updateTurn();
  }

  drawBoard() {
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

  drawUpperUI() {
    var uiClass = 'uiElement';
    var game = select('game');
    var ui = create('div');
    ui.setAttribute('class', 'ui');
    ui.id = 'ui-upper';

    // create new child element to add to our UI counting
    // number of victories by each player
    var victoryCounter = create('div');
    victoryCounter.setAttribute('class', uiClass);
    victoryCounter.id = 'winCounter';

    var currentVictories = create('h3');
    currentVictories.innerHTML = 'Win Count';

    var xWinList = create('div');
    var xName = create('h4');
    var xWinCount = create('h4');
    xWinList.setAttribute('class', 'uiList');
    xName.innerHTML = 'X: ';
    xName.id = 'xName';
    xWinCount.innerHTML = '0';
    xWinCount.id = 'xWinCount';
    xWinList.append(xName);
    xWinList.append(xWinCount);

    var yWinList = create('div');
    yWinList.setAttribute('class', 'uiList');
    var yName = create('h4');
    var yWinCount = create('h4');
    yName.innerHTML = 'Y: ';
    yName.id = 'yName';
    yWinCount.innerHTML = '0';
    yWinCount.id = 'yWinCount';
    yWinList.append(yName);
    yWinList.append(yWinCount);

    victoryCounter.append(currentVictories);
    victoryCounter.append(xWinList);
    victoryCounter.append(yWinList);

    // create new child element to our UI for current player turn
    var currentPlayer = create('h2');
    currentPlayer.id = "currentPlayer";
    currentPlayer.setAttribute('class', uiClass)

    // placeholder for name entry
    var extraElement = create('div');
    extraElement.setAttribute('class', uiClass);

    ui.append(victoryCounter);
    ui.append(currentPlayer);
    ui.append(extraElement);

    game.append(ui);
  }

  drawLowerUI() {
    var game = select('game');
    var lowerUi = create('div');
    lowerUi.id = 'ui-lower';
    lowerUi.setAttribute('class', 'ui');

    var resetButton = create('button');
    resetButton.id = 'resetButton';
    resetButton.innerHTML = 'New Game';

    lowerUi.append(resetButton);
    game.append(lowerUi);
  }

  clearBoard() {
    for (var y = 0; y < 3; y++) {
      for (var x = 0; x < 3; x++) {
        var cell = select(`${x},${y}`);
        cell.innerHTML = '';
      }
    }
  }

  updateTurn(player) {
    var currentPlayer = select('currentPlayer');
    currentPlayer.innerHTML = `${player}'s turn`;
  }  

  updateWinner(player) {
    // var currentPlayer = select('currentPlayer');
    // currentPlayer.innerHTML = `It is ${player}'s turn`;
  }
}