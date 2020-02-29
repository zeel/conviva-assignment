import customer from "../apis/customer";

export const fetchCustomers = () => async dispatch => {
  const response = await customer.get("/customers");
  dispatch({ type: "FETCH_CUSTOMERS", payload: response.data });
};

export const fetchAddresses = customerId => async dispatch => {
  const response = await customer.get(`/addresses?custId=${customerId}`);
  dispatch({
    type: "FETCH_ADDRESSES",
    payload: { customerId, addresses: response.data }
  });
};
