class App {
  constructor() {
    this.init();
  }

  init() {
    this.render = new Render();
    this.controller = new Controller();
  }

  submitHandler() {
    var inputBox = select('JSONinput');
    var inputText = inputBox.value; // unsanitized html string
    inputText = inputText.replace('\n', ''); // sanitized for json

    // call to POST via fetch, taking in USVstring endpoint and options
    fetch('/api/JSONconvert', {
      method: 'POST',
      body: inputText,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // output converted data to csv output box, response is a promise
        // call the text() promise making function to resolve to text
        return response.text();
      })
      .then(text => {
        // handle resolved text, outputting to CSVoutput textarea
        this.render.handleOutput(text);
      });
  }

  saveHandler() {
    var outputText = select('CSVoutput').value;
    var a = create('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputText));
    a.setAttribute('download', 'converted.csv');
    a.click();
  }

  uploadHandler() {
    var uploadAction = select('JSONfileAction');
    uploadAction.click();
    var fileList = uploadAction.files;
    uploadAction.files[0].text()
      .then(fileText => {
        this.render.handleInput(fileText);
      });
  }
}