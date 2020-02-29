export default (addresses = {}, action) => {
  switch (action.type) {
    case "FETCH_ADDRESSES":
      const customerId = action.payload.customerId;
      const addrs = action.payload.addresses;
      return { ...addresses, [customerId]: addrs };
    default:
      break;
  }
  return addresses;
};
