export const setCart = (items) => ({
  type: "SET_CART",
  payload: items,
});

export const addDishToCart = (Obj) => ({
  type: "ADD_DISH",
  payload: Obj,
});
