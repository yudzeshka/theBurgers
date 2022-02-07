import React from "react";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem";
import {
  deleteDishFromCart,
  addOnePiece,
  removeOnePiece,
  clearCart,
} from "../../redux/actions/cart";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Popup from "../Popup";

export default function Cart({ currentUser }) {
  const [userData, setUserData] = React.useState(null);
  const [orderCompleted, setOrderCompleted] = React.useState(false);
  const items = useSelector(({ cart }) => cart.items);
  const dispatch = useDispatch();

  const onPlus = ({ id }) => {
    dispatch(addOnePiece(id));
  };

  const onMinus = ({ id }) => {
    dispatch(removeOnePiece(id));
  };

  const onRemove = ({ id }) => {
    dispatch(deleteDishFromCart(id));
  };

  const onClickDone = () => setOrderCompleted(false);

  const totalPrice = items.reduce(
    (sum, obj) => obj.price * obj.amount + sum,
    0
  );

  React.useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, "users", currentUser.uid);
      getDoc(docRef).then((docSnap) => {
        setUserData(docSnap.data());
      });
    }
    return;
  }, [currentUser]);

  const handleSubmit = () => {
    const cityRef = doc(db, "orders", currentUser.uid);
    setDoc(
      cityRef,
      { [new Date()]: { dishes: items, totalPrice: totalPrice } },
      { merge: true }
    ).then(dispatch(clearCart()));
    setOrderCompleted(true);
  };

  return (
    <div className="menuPage h-screen overflow-auto relative">
      {orderCompleted ? (
        <Popup onClick={onClickDone} />
      ) : (
        <>
          <Header />
          <div className="contentWrapper">
            <h1 className="text-center text-4xl font-thin mb-4">Your order:</h1>
            <div className="cartContent h-full flex flex-col md:flex-row ">
              <div className="flex flex-col basis-4/6">
                {items &&
                  items.map((item) => (
                    <CartItem
                      key={`${item.id}${item.dishName}`}
                      imgSrc={item.imgSrc}
                      description={item.description}
                      dishName={item.dishName}
                      price={item.price}
                      id={item.id}
                      onRemove={(id) => onRemove(id)}
                      onPlus={(id) => onPlus(id)}
                      onMinus={(id) => onMinus(id)}
                    />
                  ))}
              </div>
              <div className="flex flex-col basis-2/6 border-solid border border-white rounded-lg m-4 justify-between items-center px-5 mb-3 ">
                {userData && (
                  <div>
                    <p className="md:text-xl">{`Full name: ${userData.username}`}</p>
                    <p className="md:text-xl">{`Delivery address: ${userData.address}`}</p>
                    <p className="md:text-xl">{`Phone number: ${userData.phoneNumber}`}</p>
                  </div>
                )}
                <div className="flex flex-col justify-between items-center">
                  <h1 className="text-center text-4xl font-thin ">
                    Total: ${totalPrice}
                  </h1>
                  <button
                    className="button text-center text-2xl border-double border-4 border-emerald-800 px-5 my-4 cursor-pointer active:scale-110"
                    onClick={handleSubmit}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
