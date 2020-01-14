var select = (domElement) => document.getElementById(domElement);
var create = (domElement) => document.createElement(domElement);

var init = () => {
  var jsonSubmit = select('JSONsubmit');
  jsonSubmit.addEventListener('click', (event) => {
    // take input from json input box
    var inputBox = select('JSONinput');
    var inputText = JSON.stringify(inputBox.value);
    // inputBox.value = ''; // clear input box
    console.log(inputText, " cached to be sent");

    // call to POST via fetch, taking in USVstring endpoint and options
    fetch('/api/JSONconvert', {
      method: 'POST',
      body: inputText,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // output converted data to csv output box
        console.log(response);
      });
  });
};

init();