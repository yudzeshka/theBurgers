import { combineReducers } from "redux";
import burgersReducer from "./burgers";
import drinksReducer from "./drinks";
import breakfastsReducer from "./breakfasts";
import cartReducer from "./cart";
import addBurgersReducer from "../reducers/cart";
import addDrinksReducer from "./cart";

const rootReducer = combineReducers({
  burgers: burgersReducer,
  drinks: drinksReducer,
  breakfasts: breakfastsReducer,
  cart: cartReducer,
  addBurgers: addBurgersReducer,
  addDrinks: addDrinksReducer,
});

export default rootReducer;
