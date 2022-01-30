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

const addBurgers = (state = initialState, action) => {
  if (action.type === "ADD_BURGERS") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  return state;
};

const addDrinks = (state = initialState, action) => {
  if (action.type === "ADD_DRINKS") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  return state;
};

export default (cart, addBurgers, addDrinks);
