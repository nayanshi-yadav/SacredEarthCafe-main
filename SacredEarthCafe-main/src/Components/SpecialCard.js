import React from "react";
import ActiveItem from "../Assets/Icons/ActiveItem";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, getItemByID, removeFromCart } from "../fearures/itemsSlice";
import AddBtnComp from "./AddBtnComp";
import AddDecComp from "./AddDecComp";

const SpecialCard = ({ item }) => {
  const dispatch = useDispatch();
  const Addeditem = useSelector((state) => getItemByID(state, item.id));
  return (
    <div className="col-lg-3 col-md-4 col-6 mb-16">
      <div className="special_card">
        <div className="special_card_img">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="special_card_body">
          <div className="d-flex align-items-center mt-8">
            <span className="me-1">
              <ActiveItem />
            </span>
            <p className="title14 color_sec">{item.title}</p>
          </div>
          <div className="mt-8 d-flex align-items-center justify-content-between">
            <p className="title13 color_sec">₹{item.price}</p>
            <div>
              {Addeditem ? (
                <AddDecComp
                  handleDecrement={() => dispatch(removeFromCart(item.id))}
                  handleIncrement={() => dispatch(addtoCart(item))}
                  qty={Addeditem.quantity}
                />
              ) : (
                <AddBtnComp handleIncrement={() => dispatch(addtoCart(item))} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCard;
