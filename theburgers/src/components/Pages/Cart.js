import React from "react";
import Header from "../Header";
import Card from "../Card";
import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";
import { setCart } from "../../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";

async function getCartItems(api) {
  return axios.get(`${api}/Cart`).then(({ data }) => data);
}

async function removeCartItems(api, id) {
  await axios.delete(`${api}/Cart/${id}`);
}

export default function Cart({ API }) {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(async () => {
    const cartItems = await getCartItems(API);
    setCartItems(cartItems);
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  const onRemove = async ({ id }) => {
    setIsLoading(true);
    await removeCartItems(API, id);
    const cartItems = await getCartItems(API);
    setCartItems(cartItems);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  const isCart = true;
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  // const totalPrice = cartItems.reduce(());

  return (
    <div className="menuPage h-screen overflow-auto">
      <Header />
      {isLoading ? (
        <div className="flex bg-black/50 min-h-[92vh]">
          <div className="m-auto  ">
            <HollowDotsSpinner size={30} />
          </div>
        </div>
      ) : (
        <div className="contentWrapper">
          <div className="content h-full">
            <h1 className="text-center text-4xl font-thin">Your order:</h1>
            <div className="cardItems">
              {cartItems.map((item) => (
                <Card
                  key={item.dishName}
                  imgSrc={item.imgSrc}
                  description={item.description}
                  dishName={item.dishName}
                  price={item.price}
                  id={item.id}
                  onRemove={(id) => onRemove(id)}
                  isCart={isCart}
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
