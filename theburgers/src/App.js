import "./App.css";
import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Burgers from "./components/Pages/Burgers";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/burgers" exact element={<Burgers />}></Route>
      </Routes>
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

export default App;
