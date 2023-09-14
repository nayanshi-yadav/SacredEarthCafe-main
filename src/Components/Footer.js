import React from "react";
import CartIcon from "../Assets/Icons/CartIcon";
import HomeIcon from "../Assets/Icons/HomeIcon";
import EventIcon from "../Assets/Icons/EventIcon";
import { useSelector } from "react-redux";
import { getItems } from "../fearures/itemsSlice";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const allItems = useSelector(getItems);
  const navigate = useNavigate()
  return (
    <div className="footer-root d-flex align-items-center justify-content-between">
      <div className="icon_body ">
        <EventIcon />
      </div>
      <div className="icon_body ">
        <HomeIcon cc={"#4A5662"} />
      </div>
      <div className="icon_body position-relative" onClick={()=>navigate(`/cart`)}>
        {allItems.length > 0 && (
          <span className="cartItemQty">{allItems.length}</span>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Footer;
