import React from "react";
import Header from "../Header";
import Cart from "../Cart";
import CarouselBox from "../CarouselBox";

export default function Breakfasts({ items }) {
  return (
    <div className="menuPage">
      <Header />
      <div className="contentWrapper">
        <CarouselBox className="carousel" />
        <div className="content">
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
