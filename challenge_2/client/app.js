var select = (domElement) => document.getElementById(domElement);
var create = (domElement) => document.createElement(domElement);

var init = () => {
  var jsonSubmit = select('JSONsubmit');
  jsonSubmit.addEventListener('click', (event) => {
    // take input from json input box
    var inputBox = select('JSONinput');
    var inputText = inputBox.value; // unsanitized html string
    inputText = inputText.replace('\n', ''); // sanitized for json
    // inputBox.value = ''; // clear input box

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
        var outputBox = select('CSVoutput');
        outputBox.value = text;
      });
  });
};

init();