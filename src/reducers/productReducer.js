const productReducer = (state = [], action) => {
  if (action.type === "add") {
    return action.payload.newState;
  }
  return state;
};
export default productReducer;
