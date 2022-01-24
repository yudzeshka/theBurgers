import React from "react";
import Header from "../Header";
import Card from "../Card";
import CarouselBox from "../CarouselBox";
import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";

export default function Drinks({ API }) {
  const [drinks, setDrinks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const isCart = false;
  React.useEffect(() => {
    axios
      .get(`${API}/Drinks`)
      .then(({ data }) => setDrinks(data))
      .then(
        setTimeout(() => {
          setIsLoading(false);
        }, 1300)
      );
  }, []);
  const onAddToCart = (obj) => {
    axios.post(`${API}/Cart`, obj);
  };
  return (
    <div className="menuPage">
      <Header />
      {isLoading ? (
        <div className="flex bg-black/50 min-h-[92vh]">
          <div className="m-auto  ">
            <HollowDotsSpinner size={30} />
          </div>
        </div>
      ) : (
        <div className="contentWrapper min-h-screen">
          <div className="content">
            <CarouselBox className="carousel" />
            <div className="cardItems">
              {drinks.map((item) => (
                <Card
                  key={item.dishName}
                  imgSrc={item.imgSrc}
                  description={item.description}
                  dishName={item.dishName}
                  price={item.price}
                  onAddToCart={(obj) => onAddToCart(obj)}
                  isCart={isCart}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
