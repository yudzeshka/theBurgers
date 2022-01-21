import React from "react";
import Header from "../Header";
import Card from "../Card";
import axios from "axios";

export default function Cart() {
  const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";

  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API}/Cart`).then(({ data }) => setCartItems(data));
  }, []);
  const totalPrice = cartItems.price;
  console.log(cartItems);
  return (
    <div className="menuPage h-screen overflow-auto">
      <Header />
      <div className="contentWrapper h-full overflow-auto">
        <div className="content h-full overflow-auto ">
          <h1 className="text-center text-4xl">Your order:</h1>
          <div className="cardItems">
            {cartItems.map((item) => (
              <Card
                key={item.dishName}
                imgSrc={item.imgSrc}
                description={item.description}
                dishName={item.dishName}
                price={item.price}
              />
            ))}
          </div>
          <h1 className="text-center text-4xl mt-10">Total: ${totalPrice} </h1>
          <button className="text-center text-2xl border-solid">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
