import React from "react";
import { connect } from "react-redux";

import { fetchAddresses } from "../actions";

class AddressList extends React.PureComponent {
  componentDidMount() {
    if (!this.props.addresses.length) {
      this.props.fetchAddresses(this.props.custId);
    }

  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.custId !== nextProps.custId && !nextProps.addresses.length) {
      this.props.fetchAddresses(nextProps.custId);
    }
  }
  render() {
    return (this.props.custId ? (<table className="ui celled table">
      <thead>
        <tr><th>Address</th>
        </tr>
      </thead>
      <tbody>
        {this.props.addresses.length > 0 ? this.props.addresses.map(address => (
          <tr key={address.id}>
            <td data-label="address">{address.address}</td>
          </tr>
        )) : <tr><td>No Addresses found</td></tr>
        }
      </tbody>
    </table>) : null
    );
  }
}
AddressList.defaultProps = {
  addresses: []
};
export default connect(
  ({ addresses }, ownProps) => ({ addresses: addresses[ownProps.custId] }),
  { fetchAddresses }
)(AddressList);
