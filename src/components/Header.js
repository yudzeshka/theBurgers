import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Header() {
  return (
    <div className="header flex md:justify-between sticky top-0 z-10">
      <nav className="flex items-center list-none ml-1 md:ml-16">
        <Link to={"/"}>
          <li className="text-sm md:text-xl p-1 md:p-4">HOME</li>
        </Link>
        <Link to={"/burgers"}>
          <li className="text-sm md:text-xl p-1 md:p-4">BURGERS</li>
        </Link>
        <Link to={"/breakfasts"}>
          <li className="text-sm md:text-xl p-1 md:p-4">BREAKFASTS</li>
        </Link>
        <Link to={"/drinks"}>
          <li className="text-sm md:text-xl p-1 md:p-4">DRINKS</li>
        </Link>
      </nav>

      {auth.currentUser && (
        <div className="flex flex-col-reverse justify-center md:flex-row md:items-center  ml-4">
          <Link
            to={"/orders"}
            className="text-sm md:text-xl user mr-4 p-1 md:p-4"
          >
            {auth.currentUser.displayName}
          </Link>
          <Link to={"/cart"}>
            <div className="img p-1 mr-2 md:p-4 md:mr-8 "></div>
          </Link>
        </div>
      )}
    </div>
  );
}
