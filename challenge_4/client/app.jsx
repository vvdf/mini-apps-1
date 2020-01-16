var React = require('react');
var ReactDOM = require('react-dom');

console.log('test');

var PretendComponent = () => {
  return (
    <h1>PRETEND COMPONENT DID I COMPILE AND PACK CORRECTLY?</h1>
  );
};

ReactDOM.render(<PretendComponent />, document.getElementById('app'));