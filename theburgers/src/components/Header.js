import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="flex items-center list-none">
        <li>HOME</li>
        <li>
          <Link to="/burgers">BURGERS</Link>
        </li>
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
