class Game {
  constructor() {
    this.init();
  }

  init() {
    this.renderer = new Render();
    this.controller = new Controller();
    this.renderer.updateTurn(this.currentPlayer());
  }

  playerAction(event) {
    // attempt movement
    var cell = event.target;
    var player = this.currentPlayer();

    if (cell.innerHTML === '') {
      // movement is possible and is being made
      cell.innerHTML = player;
      cell.className = `${cell.className} ${player}`;

      // signal to update current player/other UI elements
      this.renderer.updateTurn(this.currentPlayer());
    }

    // check win conditions
    var winner = this.checkForWinner();
    if (winner) {
      // execute win sequence
      alert(`${winner} has won!`);
    } else if (this.checkForDraw()) {
      // execute draw sequence
      alert("It's a draw.");
    }
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

  currentBoard() {
    var board = [];

    for (var y = 0; y < 3; y++) {
      var row = [];
      for (var x = 0; x < 3; x++) {
        var cell = select(`${x},${y}`);
        row.push(cell.innerHTML);
      }
      board.push(row);
    }

    return board;
  }

  checkForWinner() {
    return this.checkDiagonals() || this.checkCardinals();
  }

  checkForDraw() {
    var turnNumber = 0;

    // count total number of placements made to determine
    // current turn number
    for (var y = 0; y < 3; y++) {
      for (var x = 0; x < 3; x++) {
        var cell = select(`${x},${y}`);
        turnNumber += cell.innerHTML === '' ? 0 : 1;
      }
    }

    // if current turn number is 9, game is over, and if
    // game hasn't been won, then it is a draw
    return turnNumber > 8;
  }

  checkDiagonals() {
    var board = this.currentBoard();
    var playerType = board[1][1];

    // only two combinations for diagonal wins, test both
    // no need to test if center is empty
    if (playerType === 'X' || playerType === 'O') {
      for (var i = 0; i < 2; i++) {
        var moveDirection = i === 0 ? 'right' : 'left';
        var adjacentAllies = 0;
        var x = moveDirection === 'right' ? 0 : 2;

        for (var y = 0; y < 3;) {
          if (playerType === board[y][x]) {
            adjacentAllies++;
          }

          if (moveDirection === 'right') {
            // move down right
            x++;
            y++;
          } else if (moveDirection === 'left') {
            // move down left
            x--;
            y++;
          }
        }

        if (adjacentAllies === 3) {
          return playerType; // send winner identity up
        }
      }
    }
  }

  checkCardinals() {
    var board = this.currentBoard();

    // only 6 possible directions to traverse
    // 3 in each direction

    // traverse right
    for (var y = 0; y < 3; y++) {
      var playerType = board[y][0];
      var adjacentAllies = 1;
      for (var x = 1; x < 3; x++) {
        if (board[y][x] === playerType) {
          adjacentAllies++;
        } else {
          break;
        }
      }

      if (adjacentAllies === 3) {
        return playerType; // send winner identity up
      }
    }

    // traverse down
    for (var x = 0; x < 3; x++) {
      var playerType = board[0][x];
      var adjacentAllies = 1;
      for (var y = 1; y < 3; y++) {
        if (board[y][x] === playerType) {
          adjacentAllies++;
        } else {
          break;
        }
      }

      if (adjacentAllies === 3) {
        return playerType; // send winner identity up
      }
    }
  }

  isInBounds(x, y) {
    return x >= 0 && x <= 2 && y >= 0 && y <= 2;
  }
}

// code to represent each "round" of a given game instance