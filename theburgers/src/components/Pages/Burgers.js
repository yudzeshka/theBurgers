import React from "react";
import Header from "../Header";
import Cart from "../Cart";
import CarouselBox from "../CarouselBox";

export default function Burgers() {
  const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";
  const [burgers, setBurgers] = React.useState([]);
  React.useEffect(() => {
    fetch(`${API}/Burgers`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBurgers(json);
      });
  }, []);
  return (
    <div className="menuPage">
      <Header />
      <div className="contentWrapper">
        <CarouselBox className="carousel" />
        <div className="content">
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
