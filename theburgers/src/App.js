import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Burgers from "./components/Pages/Burgers";
import Home from "./components/Pages/Home";
import Breakfasts from "./components/Pages/Breakfasts";
import Drinks from "./components/Pages/Drinks";
import Cart from "./components/Pages/Cart";

function App() {
  const API = process.env.REACT_APP_MOKAPI_KEY;
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/burgers" exact element={<Burgers API={API} />}></Route>
          <Route
            path="/breakfasts"
            exact
            element={<Breakfasts API={API} />}
          ></Route>
          <Route path="/drinks" exact element={<Drinks API={API} />}></Route>
          <Route path="/cart" exact element={<Cart API={API} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
