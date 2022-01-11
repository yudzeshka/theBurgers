import React from "react";

export default function Cart({ imgSrc, description, dishName, price }) {
  return (
    <div className="cart">
      <div className="relative group">
        <img src={imgSrc} alt="#" />
        <p className="absolute w-full h-full top-0 left-0 bg-black/50 hidden group-hover:flex hover:transition-all">
          {description}
        </p>
      </div>
      <div className="dishName block text-center bold">{dishName}</div>
      <div className="flex flex-row justify-between m-2">
        <b>{price}</b>
        <button>Add to card</button>
      </div>
    </div>
  );
}
