import React from "react";
import PropTypes from "prop-types";

export default function CartItem({
  imgSrc,
  description,
  dishName,
  price,
  id,
  onRemove,
  onPlus,
  onMinus,
}) {
  const [counter, setCounter] = React.useState(1);

  const onClickPlus = () => {
    onPlus({ id });
    setCounter(counter + 1);
  };

  const onClickMinus = () => {
    onMinus({ id });
    setCounter(counter - 1);
  };

  const onClickRemove = () => {
    onRemove({ id });
  };
  const fullPrice = price * counter;
  return (
    <div className="flex flex-row justify-between m-4 border-solid border-2 border-black rounded-lg">
      <div className="flex flex-row">
        <img className="h-30 w-40" src={imgSrc} alt={`${dishName}`} />
        <div className="flex flex-col items-start">
          <h3>{dishName}</h3>
          <p></p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center relative ">
        <div className="flex flex-row justify-center items-center">
          <img
            src="../../img/icons/minus.svg"
            alt=""
            className="h-8 w-8 cursor-pointer active:scale-110"
            onClick={onClickMinus}
            disabled={counter === 0}
          />

          <p className="p-2 rounded-full">{counter}</p>
          <img
            src="../../img/icons/plus.svg"
            alt=""
            className="h-8 w-8 cursor-pointer active:scale-110"
            onClick={onClickPlus}
          />
        </div>
        <b className="p-2 ">{`${fullPrice}$`}</b>
        <img
          src="../../img/icons/close.svg"
          alt=""
          className="absolute top-0 right-0 h-8 w-8 cursor-pointer   active:rotate-12 "
          onClick={onClickRemove}
        />
      </div>
    </div>
  );
  // <div className="card flex flex-col justify-between ">
  //   <div className="relative group">
  //     <img className="dishImg" src={imgSrc} alt={`${dishName} photo`} />
  //     <div className=" justify-center absolute w-full h-full top-0 left-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center text-white">
  //       <p className="text-white text-center font-bold ">{description}</p>
  //     </div>
  //   </div>
  //   <div className="flex flex-col justify-between ">
  //     <div className="dishName block text-center font-bold ">{dishName}</div>
  //     <div className="flex flex-row justify-between items-center m-2">
  //       <b>{`${price}$`}</b>
  //       {isCart ? (
  //         ""
  //       ) : (
  //         <button className={isAdded ? "added" : ""} onClick={onClickAdd}>
  //           {isAdded ? "Added" : "Add to card"}
  //         </button>
  //       )}
  //       {isCart ? <button onClick={onClickRemove}> remove</button> : ""}
  //     </div>
  //   </div>
  // </div>
}

CartItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dishName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
