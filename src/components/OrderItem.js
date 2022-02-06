import React from "react";
import PropTypes from "prop-types";
import OrderDish from "./OrderDish";
export default function OrderItem({ orderInfo, orderTotalPrice, dishes }) {
  return (
    <div className="flex flex-col justify-between m-4 border-solid border border-white rounded-lg p-2 ">
      <p>Order date : {orderInfo}</p>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-row flex-wrap">
          {" "}
          {dishes.map((dish, index) => (
            <OrderDish
              key={index}
              dishName={dish.dishName}
              amount={dish.amount}
              imgSrc={dish.imgSrc}
              price={dish.price}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center items-center relative md:text-xl ">
          Total price: <span className="font-bold">{orderTotalPrice}$</span>
        </div>
      </div>
    </div>
  );
}

OrderItem.propTypes = {
  orderInfo: PropTypes.string.isRequired,
  dishes: PropTypes.array.isRequired,
  orderTotalPrice: PropTypes.number.isRequired,
};
