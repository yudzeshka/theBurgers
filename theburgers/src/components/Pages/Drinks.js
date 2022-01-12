import React from "react";
import Header from "../Header";
import Cart from "../Cart";

export default function Drinks({ items }) {
  return (
    <div className="menuPage">
      <Header />
      <div className="contentWrapper">
        <div className="content">
          <div className="promotions">
            <div className="slider"></div>
          </div>
          <div className="cartItems">
            {items.map((item) => (
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
