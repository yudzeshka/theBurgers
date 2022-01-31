import { combineReducers } from "redux";
import burgersReducer from "./burgers";
import drinksReducer from "./drinks";
import breakfastsReducer from "./breakfasts";
import cart from "./cart";
import addDishToCart from "./addDishToCart";
import deleteDishFromCart from "./deleteDishFromCart";

const rootReducer = combineReducers({
  burgers: burgersReducer,
  drinks: drinksReducer,
  breakfasts: breakfastsReducer,
  cart: cart,
  addDishToCart: addDishToCart,
  deleteDishFromCart: deleteDishFromCart,
});

export default rootReducer;
