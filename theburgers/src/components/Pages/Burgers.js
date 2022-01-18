import React from "react";
import Header from "../Header";
import Cart from "../Cart";
import CarouselBox from "../CarouselBox";
import axios from "axios";

export default function Burgers() {
  const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";
  const [burgers, setBurgers] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API}/Burgers`).then(({ data }) => setBurgers(data));
  }, []);
  return (
    <div className="menuPage">
      <Header />
      <div className="contentWrapper">
        <div className="content">
          <CarouselBox className="carousel" />
          <div className="cartItems">
            {burgers.map((item) => (
              <Cart
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
