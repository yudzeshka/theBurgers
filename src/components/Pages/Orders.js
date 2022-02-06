import React from "react";
import Header from "../Header";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import OrderItem from "../OrderItem";

export default function Orders({ currentUser }) {
  const [userOrders, setUserOrders] = React.useState([]);

  React.useEffect(() => {
    if (currentUser) {
      const docRef = doc(db, "orders", currentUser.uid);
      getDoc(docRef).then((docSnap) => {
        const newOrders = [];
        for (let key in docSnap.data()) {
          const oder = {
            ...docSnap.data()[key],
            orderInfo: key,
          };
          newOrders.push(oder);
        }
        setUserOrders(newOrders);
      });
    }
  }, [currentUser]);
  console.log(userOrders);

  return (
    <div className="menuPage h-screen overflow-auto">
      <Header />
      <div className="contentWrapper">
        <h1 className="text-center text-4xl font-thin mb-4">Orders story:</h1>
        <div className="orderContent content mx-[5vw] md:mx-[17vw] h-full flex flex-row ">
          <div className="flex flex-col w-full ">
            {!!userOrders.length &&
              userOrders.map((item, index) => (
                <OrderItem
                  key={index}
                  orderInfo={item.orderInfo}
                  orderTotalPrice={item.totalPrice}
                  dishes={item.dishes}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
