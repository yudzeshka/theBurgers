import React from "react";
import PropTypes from "prop-types";

export default function CartItem({
  imgSrc,
  description,
  dishName,
  price,
  id,
  onRemove,
}) {
  const onClickRemove = () => {
    console.log("on card", id);
    onRemove({ id });
  };

  return (
    <div className="flex flex-row justify-between m-4 border-solid border-2 border-black rounded-lg">
      <div className="flex flex-row">
        <img className="h-30 w-40" src={imgSrc} alt={`${dishName}`} />
        <div className="flex flex-col items-start">
          <h3>{dishName}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center relative ">
        <div className="flex flex-row justify-center items-center">
          <button className="p-2 rounded-full bg-zinc-200/20">-</button>
          <p className="p-2 rounded-full">0</p>
          <button className="p-2 rounded-full bg-zinc-200/20">+</button>
        </div>
        <b className="p-2 ">{`${price}$`}</b>
        <button
          className="p-1 rounded-full absolute top-0 right-0 bg-zinc-200/20"
          onClick={onClickRemove}
        >
          X
        </button>
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
