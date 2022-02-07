import axios from "axios";
const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";

export const fetchBreakfasts = () => (dispatch) => {
  axios.get(`${API}/Breakfasts`).then(({ data }) => {
    dispatch(setBreakfasts(data));
  });
};

export const setBreakfasts = (items) => ({
  type: "SET_BREAKFASTS",
  payload: items,
});
