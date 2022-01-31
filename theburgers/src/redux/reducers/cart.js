const initialState = {
  items: [],
  isLoaded: false,
};

const cart = (state = initialState, action) => {
  if (action.type === "SET_CART") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default cart;
