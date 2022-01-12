import React from "react";

import { Link } from "react-router-dom";
import Categories from "./Categories";

export default function Header() {
  return (
    <div className="header">
      <nav className="flex items-center list-none">
        <Link to={"/"}>
          <li>HOME</li>
        </Link>
        <Link to={"/burgers"}>
          <li>BURGERS</li>
        </Link>
        <Link to={"/breakfasts"}>
          <li>BREAKFASTS</li>
        </Link>
        <Link to={"/drinks"}>
          <li>DRINKS</li>
        </Link>
      </nav>
      {/* <Categories
        onClick={(name) => console.log(name)}
        items={["HOME", "BURGERS", "BREAKFASTS", "DRINKS"]}
      /> */}
      <div className="flex items-center ml-4">
        <div className="img"></div>
        {/* <span>THE BRGRS</span> */}
      </div>
    </div>
  );
}
