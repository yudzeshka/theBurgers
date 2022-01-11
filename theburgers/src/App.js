import "./App.css";
import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Burgers from "./components/Pages/Burgers";
import Home from "./components/Pages/Home";

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
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/burgers"
            exact
            element={<Burgers items={items} />}
          ></Route>
        </Routes>
      </div>
      {/* <div className="menuPage">
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
      </div> */}
    </>
  );
}

export default App;
