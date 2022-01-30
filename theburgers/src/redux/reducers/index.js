import { combineReducers } from "redux";
import burgersReducer from "./burgers";
import drinksReducer from "./drinks";
import breakfastsReducer from "./breakfasts";
import cartReducer from "./cart";
import addDishToCartReducer from "./cart";

const rootReducer = combineReducers({
  burgers: burgersReducer,
  drinks: drinksReducer,
  breakfasts: breakfastsReducer,
  cart: cartReducer,
  addDishToCart: addDishToCartReducer,
});

export default rootReducer;
