import React from "react";
import ActiveItem from "../Assets/Icons/ActiveItem";

const PrevCartCard = ({ item }) => {
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
      <p className="title13">{item.quantity}</p>
    </div>
  );
};

export default PrevCartCard;
