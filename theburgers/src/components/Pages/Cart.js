import React from "react";
import Header from "../Header";
import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";
import { deleteDishFromCart, setCart } from "../../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import { addOnePiece } from "../../redux/actions/cart";

export default function Cart() {
  const items = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ cart }) => cart.isLoaded);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setCart(items));
  }, []);

  const onRemove = ({ id }) => {
    dispatch(deleteDishFromCart(id));
  };

  const onPlus = ({ id }) => {
    console.log(id);
    dispatch(addOnePiece(id));
  };

  const totalPrice = items.reduce((sum, obj) => obj.price + sum, 0);

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
          <div className="content h-full">
            <h1 className="text-center text-4xl font-thin">Your order:</h1>
            <div className="flex flex-col">
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
                  />
                ))}
            </div>
            <div className="flex justify-between px-5">
              <h1 className="text-center text-4xl font-thin ">
                Total: ${totalPrice}
              </h1>
              <button className="text-center text-2xl border-double border-4 border-emerald-800 px-5">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
