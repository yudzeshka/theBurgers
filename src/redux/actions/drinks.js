import axios from "axios";
const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";

export const fetchDrinks = () => (dispatch) => {
  axios.get(`${API}/Drinks`).then(({ data }) => dispatch(setDrinks(data)));
};

export const setDrinks = (items) => ({
  type: "SET_DRINKS",
  payload: items,
});
