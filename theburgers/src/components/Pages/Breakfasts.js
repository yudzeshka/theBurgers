import React from "react";
import Header from "../Header";
import Cart from "../Cart";
import CarouselBox from "../CarouselBox";

export default function Breakfasts() {
  const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";
  const [breakfasts, setBreakfasts] = React.useState([]);
  React.useEffect(() => {
    fetch(`${API}/Breakfasts`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBreakfasts(json);
      });
  }, []);
  return (
    <div className="menuPage">
      <Header />
      <div className="contentWrapper">
        <CarouselBox className="carousel" />
        <div className="content">
          <div className="cartItems">
            {breakfasts.map((item) => (
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
