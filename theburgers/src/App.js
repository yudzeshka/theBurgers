import "./App.css";
import Header from "./components/Header";
import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Burgers from "./components/Pages/Burgers";

function App() {
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
            <div className="cart">
              <div>
                <img src="img/firm.jpg" alt="#" />
                <div className="description">
                  Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted
                  cucumber, Red Wine ketchup. Served with French fries and cole
                  slow
                </div>
              </div>
              <div className="dishName">FIRM BURGER</div>
              <div>
                <span>9$</span>
                <button>Add to card</button>
              </div>
            </div>
            <div className="cart">
              <div>
                <img src="img/firm.jpg" alt="#" />
                <div className="description">
                  Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted
                  cucumber, Red Wine ketchup. Served with French fries and cole
                  slow
                </div>
              </div>
              <div className="dishName block text-center">FIRM BURGER</div>
              <div className="flex flex-row justify-between m-2">
                <b>9$</b>
                <button>Add to card</button>
              </div>
            </div>
            <div className="cart">
              <div>
                <img src="img/firm.jpg" alt="#" />
                <div className="description">
                  Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted
                  cucumber, Red Wine ketchup. Served with French fries and cole
                  slow
                </div>
              </div>
              <div className="dishName block text-center">FIRM BURGER</div>
              <div className="flex flex-row justify-between m-2">
                <b>9$</b>
                <button>Add to card</button>
              </div>
            </div>
            <div className="cart">
              <div>
                <img src="img/firm.jpg" alt="#" />
                <div className="description">
                  Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted
                  cucumber, Red Wine ketchup. Served with French fries and cole
                  slow
                </div>
              </div>
              <div className="dishName block text-center">FIRM BURGER</div>
              <div className="flex flex-row justify-between m-2">
                <b>9$</b>
                <button>Add to card</button>
              </div>
            </div>
            <div className="cart">
              <div>
                <img src="img/firm.jpg" alt="#" />
                <div className="description">
                  Marbled beef cutlet, Gouda and Cheddar cheese, lightly salted
                  cucumber, Red Wine ketchup. Served with French fries and cole
                  slow
                </div>
              </div>
              <div className="dishName">FIRM BURGER</div>
              <div>
                <span>9$</span>
                <button>Add to card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
