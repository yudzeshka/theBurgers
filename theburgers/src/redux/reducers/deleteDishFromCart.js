const initialState = {
  items: [],
  isLoaded: false,
};

const deleteDishFromCart = (state = initialState, action) => {
  if (action.type === "DELETE_DISH") {
    console.log(action.payload);
    return {
      ...state,
      items: [...state.items].filter(function (item) {
        return item.id !== action.payload;
      }),
    };
  }
  return state;
};

export default deleteDishFromCart;
