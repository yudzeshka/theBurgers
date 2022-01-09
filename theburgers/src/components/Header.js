import React from "react";

import { Link } from "react-router-dom";
import Categories from "./Categories";

export default function Header() {
  return (
    <div className="header">
      <Categories
        onClick={(name) => console.log(name)}
        items={["HOME", "BURGERS", "BREAKFESTS", "DRINKS"]}
      />
      <div className="flex items-center ml-4">
        <div className="img"></div>
        {/* <span>THE BRGRS</span> */}
      </div>
    </div>
  );
}
