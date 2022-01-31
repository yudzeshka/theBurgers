import axios from "axios";

export const postDishToCart = (API, obj) => (dispatch) => {
  axios.post(`${API}/Cart`, obj);
  dispatch(addDishToCart);
};

export const setCart = (items) => ({
  type: "SET_CART",
  payload: items,
});

export const addDishToCart = (Obj) => ({
  type: "ADD_DISH",
  payload: Obj,
});
