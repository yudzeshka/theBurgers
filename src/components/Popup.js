import React from "react";

export default function Popup({ onClick }) {
  return (
    <div className="flex items-center justify-center flex-col absolute w-2/6 h-2/6 border border-white bg-gray-900/70 top-1/3 left-1/3">
      <p className="p-10 text-lg ">
        Your order has been successfully placed. Thank you for your order, we
        will contact you soon.
      </p>
      <button
        onClick={onClick}
        className="button border border-white py-2 px-3 m-2"
      >
        Done
      </button>
    </div>
  );
}
