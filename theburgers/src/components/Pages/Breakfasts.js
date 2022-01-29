import React from "react";
import Header from "../Header";
import Card from "../Card";
import CarouselBox from "../CarouselBox";
import axios from "axios";
import { HollowDotsSpinner } from "react-epic-spinners";
import { useDispatch, useSelector } from "react-redux";
import { setBreakfasts } from "../../redux/actions/breakfasts";

export default function Breakfasts({ API }) {
  const dispatch = useDispatch();
  const items = useSelector(({ breakfasts }) => breakfasts.items);
  const [isLoading, setIsLoading] = React.useState(false);
  const isCart = false;

  React.useEffect(() => {
    axios
      .get(`${API}/Breakfasts`)
      .then(({ data }) => {
        dispatch(setBreakfasts(data));
      })
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
              {items &&
                items.map((item) => (
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
