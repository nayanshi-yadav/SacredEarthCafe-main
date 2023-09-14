import React from "react";
import ActiveItem from "../Assets/Icons/ActiveItem";
import AddDecComp from "./AddDecComp";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, getItemByID, removeFromCart } from "../fearures/itemsSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const Addeditem = useSelector((state) => getItemByID(state, item.id));
  return (
    <div className="d-flex cart_card_root mb-24">
      <div className="flex-grow-1 d-flex align-items-center">
        <span>
          <ActiveItem />
        </span>
        <div className="ml-8">
          <p className="title14 color_sec">{item.title}</p>
          <p className="title14 text-start color_72">₹{item.price}</p>
        </div>
      </div>
      <AddDecComp
        handleDecrement={() => dispatch(removeFromCart(item.id))}
        handleIncrement={() => dispatch(addtoCart(item))}
        qty={Addeditem.quantity}
      />
    </div>
  );
};

export default CartCard;
