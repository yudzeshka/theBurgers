import React from "react";
import Header from "../Header";
import Cart from "../Cart";
import CarouselBox from "../CarouselBox";
import axios from "axios";
export default function Drinks() {
  const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";

  const [drinks, setDrinks] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API}/Drinks`).then(({ data }) => setDrinks(data));
  }, []);

  return (
    <div className="menuPage">
      <Header />
      <div className="contentWrapper">
        <div className="content">
          <CarouselBox className="carousel" />
          <div className="cartItems">
            {drinks.map((item) => (
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
