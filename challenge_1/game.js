class Game {
  constructor() {
    this.renderer = new Render();
    this.controller = new Controller();
  }

  playerAction(event) {
    // attempt movement
    var cell = event.target;
    var player = this.currentPlayer();
    
    if (cell.innerHTML === '') {
      cell.innerHTML = player;
      cell.className = `${cell.className} ${player}`;
    }

    // check win conditions

  }

  currentPlayer() {
    var turnNumber = 0;

    // count total number of placements made to determine
    // current turn number
    for (var y = 0; y < 3; y++) {
      for (var x = 0; x < 3; x++) {
        var cell = select(`${x},${y}`);
        turnNumber += cell.innerHTML === '' ? 0 : 1;
      }
    }

    // if current turn number is even, current player is X
    // otherwise current player is O
    return turnNumber % 2 === 0 ? 'X' : 'O';
  }

  checkWin() {
    var board = [];

    for (var y = 0; y < 3; y++) {
      var row = [];
      for (var x = 0; x < 3; x++) {
        var cell = select(`${x},${y}`);
        row.push(cell.innerHTML);
      }
    }

  }
}

// code to represent each "round" of a given game instance