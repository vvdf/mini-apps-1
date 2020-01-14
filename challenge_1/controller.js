class Controller {
  constructor() {
    this.init();
  }

  init() {
    var board = select('board');
    board.addEventListener('click', this.handleBoardClick);

    var resetButton = select('resetButton');
    resetButton.addEventListener('click', this.handleReset);
  }

  handleBoardClick(event) {
    game.playerAction(event);
  }

  handleReset() {
    game.reset();
  }
}