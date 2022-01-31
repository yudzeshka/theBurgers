const initialState = {
  items: [],
  isLoaded: false,
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

export default addDishToCart;
