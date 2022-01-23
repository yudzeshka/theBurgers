import React from "react";
import Header from "../Header";
import Card from "../Card";
import axios from "axios";

async function getCartItems(api) {
  return axios.get(`${api}/Cart`).then(({ data }) => data);
}

async function removeCartItems(api, id) {
  await axios.delete(`${api}/Cart/${id}`);
}

export default function Cart({ API }) {
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(async () => {
    const cartItems = await getCartItems(API);
    setCartItems(cartItems);
  }, []);

  const onRemove = async ({ id }) => {
    await removeCartItems(API, id);
    const cartItems = await getCartItems(API);
    setCartItems(cartItems);
  };
  const isCart = true;
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  // const totalPrice = cartItems.reduce(());

  return (
    <div className="menuPage h-screen overflow-auto">
      <Header />
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
    </div>
  );
}
