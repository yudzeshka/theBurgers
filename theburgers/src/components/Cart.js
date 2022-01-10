import React from "react";

export default function Cart({ imgSrc, description, dishName, price }) {
  return (
    <div className="cart">
      <div>
        <img src={imgSrc} alt="#" />
        <p className="description">{description}</p>
      </div>
      <div className="dishName block text-center bold">{dishName}</div>
      <div className="flex flex-row justify-between m-2">
        <b>{price}</b>
        <button>Add to card</button>
      </div>
    </div>
  );
}
