import React from "react";

export default function Cart({ imgSrc, description, dishName, price }) {
  return (
    <div className="cart">
      <div className="relative group">
        <img className="dishImg" src={imgSrc} alt="#" />
        <div className="absolute w-full h-full top-0 left-0 bg-black/50 hidden group-hover:flex items-center  hover:transition-all text-white">
          <p className="text-white text-center">{description}</p>
        </div>
      </div>
      <div className="dishName block text-center font-bold">{dishName}</div>
      <div className="flex flex-row justify-between items-center m-2">
        <b>{price}</b>
        <button>Add to card</button>
      </div>
    </div>
  );
}
