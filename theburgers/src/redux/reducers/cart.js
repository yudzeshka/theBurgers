const initialState = {
  items: [],
  isLoaded: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "ADD_DISH":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "DELETE_DISH":
      return {
        ...state,
        items: [...state.items].filter(function (item) {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
