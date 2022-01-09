import "./App.css";
import Header from "./components/Header";
import React from "react";
import Cart from "./components/Cart";
// import { Route, Routes } from "react-router-dom";
// import Burgers from "./components/Pages/Burgers";

function App() {
  const items = [
    {
      imgSrc: "img/burgers/firm.jpg",
      description:
        " Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted cucumber, Red Wine ketchup. Served with French fries and cole slow",
      dishName: "FIRM BURGER",
      price: "9$",
    },
    {
      imgSrc: "img/burgers/blek.jpg",
      description:
        " Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted cucumber, Red Wine ketchup. Served with French fries and cole slow",
      dishName: "BLACK BURGER",
      price: "12$",
    },
    {
      imgSrc: "img/burgers/trufel.jpg",
      description:
        " Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted cucumber, Red Wine ketchup. Served with French fries and cole slow",
      dishName: "TRUFEL BURGER",
      price: "29$",
    },
  ];
  return (
    <>
      <div className="wrapper">
        {/* <Routes>
        <Route path="/burgers" exact element={<Burgers />}></Route>
      </Routes> */}
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
      <div className="menuPage">
        <Header />
        <div className="content">
          <div className="promotions">
            <div className="slider"></div>
          </div>
          <div className="cartItems">
            {items.map((item) => (
              <Cart
                key={item.dishName}
                imgSrc={item.imgSrc}
                description={item.description}
                dishName={item.dishName}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
