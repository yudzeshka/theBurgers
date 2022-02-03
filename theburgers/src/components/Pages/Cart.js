import React from "react";
import Header from "../Header";
// import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import {
  deleteDishFromCart,
  setCart,
  addOnePiece,
  removeOnePiece,
} from "../../redux/actions/cart";
import FormFormik from "../FormFormik";

export default function Cart() {
  const items = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ cart }) => cart.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setCart(items));
  }); //deleted empty array of dependencies

  const onPlus = ({ id }) => {
    dispatch(addOnePiece(id));
  };

  const onMinus = ({ id }) => {
    dispatch(removeOnePiece(id));
  };

  const onRemove = ({ id }) => {
    dispatch(deleteDishFromCart(id));
  };

  const totalPrice = items.reduce(
    (sum, obj) => obj.price * obj.amount + sum,
    0
  );

  return (
    <div className="menuPage h-screen overflow-auto">
      <Header />
      {!isLoaded ? (
        <div className="flex bg-black/50 min-h-[92vh]">
          <div className="m-auto  ">
            <HollowDotsSpinner size={30} />
          </div>
        </div>
      ) : (
        <div className="contentWrapper">
          <h1 className="text-center text-4xl font-thin">Your order:</h1>
          <div className="cartContent h-full flex flex-row ">
            <div className="flex flex-col basis-3/5">
              {items &&
                items.map((item) => (
                  <CartItem
                    key={`${item.id}${item.dishName}`}
                    imgSrc={item.imgSrc}
                    description={item.description}
                    dishName={item.dishName}
                    price={item.price}
                    id={item.id}
                    onRemove={(id) => onRemove(id)}
                    onPlus={(id) => onPlus(id)}
                    onMinus={(id) => onMinus(id)}
                  />
                ))}
            </div>
            <div className="flex flex-col basis-2/5 border-solid border-2 border-black rounded-lg m-4 justify-between items-center px-5 mb-3 ">
              <FormFormik />
              <div>
                <h1 className="text-center text-4xl font-thin ">
                  Total: ${totalPrice}
                </h1>
                <button
                  className="text-center text-2xl border-double border-4 border-emerald-800 px-5 cursor-pointer active:scale-110"
                  onClick={() =>
                    console.log(
                      items.map(
                        (item) =>
                          `${item.dishName}, prise = ${item.price}$, amount = ${item.amount},`
                      ),
                      `totalPrice = ${totalPrice}$, firstname: Maksim, phoneNumber: +375292223876`
                    )
                  }
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
