const initialState = {
  items: [],
  isLoaded: false,
};

const burgers = (state = initialState, action) => {
  if (action.type === "SET_BURGERS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default burgers;
