import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
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
