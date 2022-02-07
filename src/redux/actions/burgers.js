import axios from "axios";
const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";

export const fetchBurgers = () => (dispatch) => {
  axios.get(`${API}/Burgers`).then(({ data }) => {
    dispatch(setBurgers(data));
  });
};

export const setBurgers = (items) => ({
  type: "SET_BURGERS",
  payload: items,
});
