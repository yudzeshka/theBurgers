export const setCart = (items) => ({
  type: "SET_CART",
  payload: items,
});

export const addBurgers = (burgersObj) => ({
  type: "ADD_BURGERS",
  payload: burgersObj,
});

export const addDrinks = (drinksObj) => ({
  type: "ADD_DRINKS",
  payload: drinksObj,
});
