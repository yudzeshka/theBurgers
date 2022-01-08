import React from "react";

export default function Header() {
  return (
    <div className="header">
      <nav className="flex items-center list-none">
        <li>HOME</li>
        <li>BURGERS</li>
        <li>DESERTS</li>
        <li>BREAKFESTS</li>
        <li>DRINKS</li>
      </nav>
      <div className="flex items-center ml-4">
        <div className="img"></div>
        {/* <span>THE BRGRS</span> */}
      </div>
    </div>
  );
}
