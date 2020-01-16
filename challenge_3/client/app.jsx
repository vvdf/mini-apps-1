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
  width: '30%'
};

var CheckoutForm = (props) => {
  if (props.formInputs) {
    // a form input set has been passed
    // render an entry for every passed input name
    return (
      <div style={divStyle}>
        <form style={formStyle}>
            { 
              props.formInputs.map((formEntryName, key) => {
                return (
                  <label style={formEntryStyle}>
                    {formEntryName}:
                    <input type="text" placeholder={formEntryName} id={formEntryName.replace(/ /g, '-')} className="formEntry" />
                  </label>
                );
              }) 
            }
          <input type="button" value="Next Step" style={buttonStyle} onClick={props.step} />
        </form>
      </div>
    );
  } else {
    // currently on basecase of checkout form, if process hasn't started
    return (
      <div style={divStyle}>
        <input type="button" value="Checkout" style={buttonStyle} onClick={props.step} />
      </div>
    );
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutStep: 0, 
      formInput: [
        ['name', 'email', 'password'],
        ['address line 1', 'address line 2', 'city', 'state', 'zip', 'phone'],
        ['credit card number', 'expiry date', 'cvv', 'billing zip']
      ]
    };
  }

  nextStep() {
    var stepPermitted = true;

    if (this.state.checkoutStep > 0) {
      var currentInputs = this.state.formInput[this.state.checkoutStep - 1].map(inputEntry => inputEntry.replace(/ /g, '-'));
      var currentValues = currentInputs.map(inputEntrySanitized => {
        var formInputValue = document.getElementById(inputEntrySanitized).value;
        stepPermitted = formInputValue ? stepPermitted : false;
      });
    }

    if (stepPermitted) {
      this.clearForms();
      

      this.setState({
        checkoutStep: (this.state.checkoutStep + 1) % 4
      });
    } else {
      alert('Please fill in all boxes');
    }
  }

  clearForms() {
    if (this.state.checkoutStep > 0) {
      var currentInputs = this.state.formInput[this.state.checkoutStep - 1].map(inputEntry => inputEntry.replace(/ /g, '-'));
      var currentValues = currentInputs.map(inputEntrySanitized => document.getElementById(inputEntrySanitized).value = '');
    }
  }

  render() {
    return (
        <div>
          <CheckoutForm formInputs={ this.state.formInput[this.state.checkoutStep - 1] } step={() => this.nextStep()} />
        </div>
      );
  }
}

// render to DOM
ReactDOM.render(<App />, document.getElementById('app'));