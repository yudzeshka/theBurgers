import React from "react";
import Header from "../Header";
import Card from "../Card";
import CarouselBox from "../CarouselBox";
import axios from "axios";

export default function Burgers({ API }) {
  const [burgers, setBurgers] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API}/Burgers`).then(({ data }) => setBurgers(data));
  }, []);
  const onAddToCart = (obj) => {
    axios.post(`${API}/Cart`, obj);
  };
  return (
    <div className="menuPage">
      <Header />
      <div className="contentWrapper min-h-screen">
        <div className="content">
          <CarouselBox className="carousel" />
          <div className="cardItems">
            {burgers.map((item) => (
              <Card
                key={item.dishName}
                imgSrc={item.imgSrc}
                description={item.description}
                dishName={item.dishName}
                price={item.price}
                onAddToCart={(obj) => onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
