import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Burgers from "./components/Pages/Burgers";
import Home from "./components/Pages/Home";
import Breakfasts from "./components/Pages/Breakfasts";
import Drinks from "./components/Pages/Drinks";

function App() {
  const API = "https://61de95d1fb8dae0017c2e11f.mockapi.io";
  const [burgers, setBurgers] = React.useState();
  React.useEffect(() => {
    fetch(`${API}/Burgers`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBurgers(json);
      });
  }, []);
  const [breakfasts, setBreakfasts] = React.useState();
  React.useEffect(() => {
    fetch(`${API}/Breakfasts`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBreakfasts(json);
      });
  }, []);
  const [drinks, setDrinks] = React.useState();
  React.useEffect(() => {
    fetch(`${API}/Drinks`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDrinks(json);
      });
  }, []);
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/burgers"
            exact
            element={<Burgers items={burgers} />}
          ></Route>
          <Route
            path="/breakfasts"
            exact
            element={<Breakfasts items={breakfasts} />}
          ></Route>
          <Route
            path="/drinks"
            exact
            element={<Drinks items={drinks} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
