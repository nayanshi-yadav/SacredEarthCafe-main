import React from "react";
import AddIcon from "../Assets/Icons/AddIcon";

const AddBtnComp = ({ handleIncrement }) => {
  return (
    <button className="special_card_addBtn" onClick={handleIncrement}>
      {" "}
      <span className="special_card_addBtnCircle mr-8">
        <AddIcon />
      </span>{" "}
      Add
    </button>
  );
};

export default AddBtnComp;
