import React from "react";

export default function Cart({ imgSrc, description, dishName, price }) {
  return (
    <div className="cart flex flex-col justify-between ">
      <div className="relative group">
        <img className="dishImg" src={imgSrc} alt="#" />
        <div className="absolute w-full h-full top-0 left-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center text-white">
          <p className="text-white text-center font-bold">{description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="dishName block text-center font-bold ">{dishName}</div>
        <div className="flex flex-row justify-between items-center m-2">
          <b>{price}</b>
          <button>Add to card</button>
        </div>
      </div>
    </div>
  );
}
