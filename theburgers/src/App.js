import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Burgers from "./components/Pages/Burgers";
import Home from "./components/Pages/Home";
import Breakfasts from "./components/Pages/Breakfasts";
import Drinks from "./components/Pages/Drinks";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/burgers" exact element={<Burgers />}></Route>
          <Route path="/breakfasts" exact element={<Breakfasts />}></Route>
          <Route path="/drinks" exact element={<Drinks />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
