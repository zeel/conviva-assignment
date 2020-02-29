import React from "react";
import CustomerList from "./CustomerList";
import Addresses from "./Addresses";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onCustomerSelect = (custId) => {
    this.setState({ custId: custId })
  }
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className={`${this.state.custId ? 'eight' : 'sixteen'} wide column`}>
            <CustomerList onSelect={this.onCustomerSelect} selectedCustId={this.state.custId} />
          </div>
          {this.state.custId && <div className="eight wide column"><Addresses custId={this.state.custId} /></div>}
        </div>

      </div>
    );
  }
}
export default App;
