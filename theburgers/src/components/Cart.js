import React from "react";

export default function Cart({
  imgSrc,
  description,
  dishName,
  price,
  showDescription,
  onShowDescription,
}) {
  console.log(showDescription);
  return (
    <div className="cart">
      <div onMouseEnter={onShowDescription}>
        <img src={imgSrc} alt="#" />
        {showDescription && <div className="description">{description}</div>}
      </div>
      <div className="dishName block text-center bold">{dishName}</div>
      <div className="flex flex-row justify-between m-2">
        <b>{price}</b>
        <button>Add to card</button>
      </div>
    </div>
  );
}
