import React from "react";
import Header from "../Header";
import Card from "../Card";
import CarouselBox from "../CarouselBox";
import { HollowDotsSpinner } from "react-epic-spinners";
import { fetchBurgers } from "../../redux/actions/burgers";
import { useSelector, useDispatch } from "react-redux";
import { postDishToCart } from "../../redux/actions/cart";

export default function Burgers({ API }) {
  const dispatch = useDispatch();
  const items = useSelector(({ burgers }) => burgers.items);
  const [isLoading, setIsLoading] = React.useState(false);
  const isCart = false;

  React.useEffect(() => {
    dispatch(fetchBurgers(API));
  }, []);
  const onAddToCart = (obj) => {
    dispatch(postDishToCart(API, obj));
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
