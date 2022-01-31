import axios from "axios";

// export const fetchCart = (API) => (dispatch) => {
//   axios.get(`${API}/Cart`).then(({ data }) => {
//     dispatch(setCart(data));
//   });
// };

// export const removeCartItems = (API, id) => (dispatch) => {
//   axios.delete(`${API}/Cart/${id}`);
//   dispatch(deleteDishFromCart(id));
//   // dispatch(fetchCart(API));
// };

// export const postDishToCart = (API, obj) => (dispatch) => {
//   // axios.post(`${API}/Cart`, obj);
//   dispatch(addDishToCart);
// };

export const setCart = (items) => ({
  type: "SET_CART",
  payload: items,
});

export const addDishToCart = (Obj) => ({
  type: "ADD_DISH",
  payload: Obj,
});

export const deleteDishFromCart = (id) => ({
  type: "DELETE_DISH",
  payload: id,
});
