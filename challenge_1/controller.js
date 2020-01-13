class Controller {
  constructor() {
    this.init();
  }

  init() {
    var cells = selectByClass('cell');
    board.addEventListener('click', this.handleClick);
  }

  handleClick(event) {
    game.playerAction(event);
  }
}