import React from "react";
import PropTypes from "prop-types";

export default function OrderDish({ dishName, amount, imgSrc, price }) {
  return (
    <div className="flex flex-col justify-between m-1 border-solid border border-black rounded-lg p-1 ">
      <div>
        {" "}
        <img className="w-20 h-15" src={imgSrc} alt={dishName}></img>
        <p className="text-sm">{dishName}</p>
      </div>
      <div>
        <p>
          pieces : <span className="font-bold">{amount}</span>
        </p>
        <p>
          price : <span className="font-bold">{price}$</span>
        </p>
      </div>
    </div>
  );
}

OrderDish.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  dishName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
