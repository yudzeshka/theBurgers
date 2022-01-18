import React from "react";
import Header from "../Header";
export default function Home() {
  return (
    <div className="homePage">
      <Header />
      <div className="content">
        <div className="textWrapper">
          <h1>The Burgers</h1>
          <h3>Handcrafted since 1968</h3>
        </div>
        <div className="buttonsWrapper">
          <button>RESERVATION</button>
        </div>
      </div>
    </div>
  );
}
