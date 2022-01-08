import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="flex items-center ml-4">
          <div className="img"></div>
          <span>THE BRGRS</span>
        </div>
        <nav className="flex items-center list-none">
          <li>HOME</li>
          <li>BURGERS</li>
          <li>DESERTS</li>
          <li>BREAKFESTS</li>
          <li>DRINKS</li>
        </nav>
      </div>
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
