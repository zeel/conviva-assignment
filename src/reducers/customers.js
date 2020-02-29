export default (customers = [], action) => {

  switch (action.type) {
    case "FETCH_CUSTOMERS":
      customers = [...customers, ...action.payload];
      break;
    default:
      break;
  }
  return customers;
};
