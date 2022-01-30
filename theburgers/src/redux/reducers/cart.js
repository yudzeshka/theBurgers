const initialState = {
  items: [],
  isLoaded: false,
};

const cart = (state = initialState, action) => {
  if (action.type === "SET_CART") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

const addDishToCart = (state = initialState, action) => {
  if (action.type === "ADD_DISH") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  return state;
};

export default (cart, addDishToCart);
