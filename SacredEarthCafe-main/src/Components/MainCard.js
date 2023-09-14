import React from "react";
import ActiveItem from "../Assets/Icons/ActiveItem";
import { useSelector } from "react-redux";
import { getItemByID } from "../fearures/itemsSlice";
import AddDecComp from "./AddDecComp";
import AddBtnComp from "./AddBtnComp";

const MainCard = ({
  image,
  name,
  price,
  id,
  handleIncrement,
  handleDecrement,
}) => {
  const Addeditem = useSelector((state) => getItemByID(state, id));

  return (
    <div className="mb-16 mainCard_root d-flex align-items-center">
      {image && (
        <div className="mainCard_img mr-16">
          <img src={image} alt={name} />
        </div>
      )}
      <div className="mainCard_main flex-grow-1">
        <p className="body1">{name}</p>
        <div className="mt-8 d-flex align-items-center justify-content-between">
          <p className="title13 color_sec">
            <span className="me-1">
              <ActiveItem />
            </span>{" "}
            ₹{price}
          </p>
          <div>
            {Addeditem ? (
              <AddDecComp
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                qty={Addeditem.quantity}
              />
            ) : (
              <AddBtnComp handleIncrement={handleIncrement} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
