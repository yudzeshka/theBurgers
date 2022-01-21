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
  return (
    <div className="menuPage h-screen">
      <Header />
      <div className="contentWrapper h-full">
        <div className="content h-full  ">
          <h1 className="text-center text-4xl">Cart</h1>
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
        </div>
      </div>
    </div>
  );
}
