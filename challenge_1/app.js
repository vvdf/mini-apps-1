var select = (domElement) => document.getElementById(domElement);
var create = (domElement) => document.createElement(domElement);

// var game = select('game');
// var board = create('div');
// board.className = 'board';
// board.innerHTML = 'Example Text';

// game.append(board);
gameOne = new Game();

// tic tac toe
// basic game rules:
// first move is always X
// app should detect a win or draw, and display an appropriate message
// should implement a button to reset the game for a new round of gameplay
//
// implementation:
// this should be a single page app
// aka no user-generated action should cause the page to reload
//  - initially, only use native DOM methods to interact with the page
// utilize MVC model design even within the scope of our javascript files
// for utilizing good seperation of concerns between the model, the view, and the controls
// 
// things to note:
// advanced/nightmare will suggest utilizing es6 classes to encompass some amount
// of game logic, as well as to eventually refactor so that everything is handled
// in terms of pure functions rather than the use of closure scoped variables
//
// adv: 
// single event listener for board interactions
// keep track of winner of last (O or X)
// tally of victories for each one
// refactor app to keep all state in one object/module
// refactor presentation code to live in one object/module
// refactor controller code to live in one object/module
// css styling
// crazy twist gravity mode (with button to enable/disable)
// serve game + assets from an express server

/*
  primary structure:
    game model object containing state and general logic
    renderer object to handle all outputting and interaction with the DOM
    controller/input object to handle all functionality of connecting the
      DOM rendered objects to the game model logic

  to do:
    refactor use of spans to be divs using flexbox css styling on each row
*/