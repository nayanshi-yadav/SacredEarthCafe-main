import { ArrowBack, ArrowForward } from "@mui/icons-material";
import React, { useState } from "react";
import CommentIcon from "../Assets/Icons/CommentIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getItems,
  getPreviousOrders,
  sentToPreviousOrder,
  totalPrice,
} from "../fearures/itemsSlice";
import CartCard from "../Components/CartCard";
import { useNavigate } from "react-router-dom";
import PrevCartCard from "../Components/PrevCartCard";

const Cart = () => {
  const allItems = useSelector(getItems);
  const totalVal = useSelector(totalPrice);
  const allPrev = useSelector(getPreviousOrders);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPrev, setShowPrev] = useState(true);
  const [showorder, setShoworder] = useState(true);
  return (
    <div className="home_root">
      <div className="home_head">
        <div className="d-flex align-items-center pb-24">
          <div className="back_cta" onClick={() => navigate(-1)}>
            <ArrowBack />
          </div>
          <p className="title20 flex-grow-1 ml-16">Place Order</p>
          <div className="back_cta">
            <CommentIcon />
          </div>
        </div>
      </div>
      <div className="cart_root">
        <div className="cart_main">
          <div className="current_orders">
            <div
              className="special_home_header pl-16 mt-32 mb-16"
              onClick={() => setShoworder(!showorder)}
            >
              <div className="title14 color_sec mr-8">Current Order</div>
              <span className="special_home_head_line"></span>
              <span className={`ml-8 ${showorder && "rotate180"}`}>
                <DownIcon />
              </span>
            </div>
            {showorder && allItems.length > 0 && (
              <div className="current_order_root">
                {allItems.map((item) => (
                  <CartCard key={item.id} item={item} />
                ))}
                <div>
                  <p className="title13 color_76 underline text-start">
                    Add cooking instruction
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="cart_main">
          <div className="current_orders">
            <div
              className="special_home_header mt-32 mb-16 pl-16"
              onClick={() => setShowPrev(!showPrev)}
            >
              <div className="title14 color_sec mr-8">Previous Orders</div>
              <span className="special_home_head_line"></span>
              <span className={`ml-8 ${showPrev && "rotate180"}`}>
                <DownIcon />
              </span>
            </div>
            {showPrev && allPrev.length > 0 && (
              <div className="current_order_root">
                {allPrev.map((item) => (
                  <PrevCartCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cart_foooter d-flex justify-content-between">
        <p className="title13">{allItems.length}</p>
        <p className="title13">₹{totalVal}</p>
        <p
          className="title13 d-flex align-items-center"
          onClick={() => {
            dispatch(sentToPreviousOrder(allItems));
            navigate(`/`);
            dispatch(clearCart());
          }}
        >
          Place Order{" "}
          <span className="place_circle ml-8">
            <ArrowForward fontSize="small" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
