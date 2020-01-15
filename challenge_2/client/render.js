class Render {
  constructor() {
  }

  handleOutput(text) {
      // handle resolved text, outputting to CSVoutput textarea
      var outputBox = select('CSVoutput');
      outputBox.value = text;
  }

  handleInput(text) {
      var inputBox = select('JSONinput');
      inputBox.value = text;
  }
}