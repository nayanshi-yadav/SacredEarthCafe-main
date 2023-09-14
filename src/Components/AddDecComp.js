import React from "react";
import MinusIcon from "../Assets/Icons/MinusIcon";
import AddIcon from "../Assets/Icons/AddIcon";

const AddDecComp = ({ handleIncrement, handleDecrement, qty }) => {
  return (
    <div className="special_card_addBtn">
      <span
        className="special_card_addBtnCircle mr-8"
        onClick={handleDecrement}
      >
        <MinusIcon />
      </span>
      <span>{qty}</span>
      <span
        className="special_card_addBtnCircle ml-8"
        onClick={handleIncrement}
      >
        <AddIcon />
      </span>
    </div>
  );
};

export default AddDecComp;
