var divStyle = {
  display: 'flex',
  justifyContent: 'center'
};

var formStyle = { 
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center'
};

var formEntryStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

var buttonStyle = {
  width: '30%',
};

var UserInputs = ['name', 'email', 'password'];
var AddressInputs = ['address line 1', 'address line 2', 'city', 'state', 'zip', 'phone'];
var PaymentInputs = ['credit card number', 'expiry date', 'cvv', 'billing zip code'];

var CheckoutForm = (props) => {
  return (
      <div style={divStyle}>
        <form style={formStyle}>
            <label style={formEntryStyle}>
              Name:
              <input type="text" placeholder="name" />
            </label>
            <label style={formEntryStyle}>
              Email:
              <input type="text" placeholder="email@address.com" />
            </label>
            <label style={formEntryStyle}>
              Password:
              <input type="text" placeholder="password" />
            </label>
          <input type="submit" value="Next Step" style={buttonStyle} />
        </form>
      </div>
    );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <CheckoutForm />
        </div>
      );
  }
}


// render to DOM
ReactDOM.render(<App />, document.getElementById('app'));