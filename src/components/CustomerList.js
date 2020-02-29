import React from "react";
import { connect } from "react-redux";

import { fetchCustomers } from "../actions";

const TableRow = ({ customer, onRowClick, selectedCustId }) => {
  const onClick = () => onRowClick(customer.id);
  return (
    <tr key={customer.id} onClick={onClick} className={selectedCustId === customer.id ? 'active' : ''}>
      <td data-label="Name">{customer.name}</td>
      <td data-label="Age">{customer.age}</td>
      <td data-label="Sex">{customer.sex}</td>
    </tr>
  )
}
class CustomerList extends React.PureComponent {
  componentDidMount() {
    if (!this.props.customers.length) {
      this.props.fetchCustomers();
    }

  }

  render() {
    return (<table className="ui celled table">
      <thead>
        <tr><th>Customer Name</th>
          <th>Age</th>
          <th>Sex</th>
        </tr>
      </thead>
      <tbody>
        {this.props.customers.map(customer => (
          <TableRow key={customer.id} customer={customer} onRowClick={this.props.onSelect} selectedCustId={this.props.selectedCustId} />
        ))}
      </tbody>
    </table>
    );
  }
}
export default connect(
  ({ customers }) => ({ customers }),
  { fetchCustomers }
)(CustomerList);
