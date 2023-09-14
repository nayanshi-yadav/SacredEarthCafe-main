import React, { useState } from "react";
import DownIcon from "../Assets/Icons/DownIcon";
import MainCard from "./MainCard";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../fearures/itemsSlice";

export const MainAccordian = ({ acc, data }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  return (
    <div className="main-accordina_root">
      <div className="special_home_header mb-16" onClick={() => setShow(!show)}>
        <div className="title14 color_sec">{acc}</div>
        <span className="special_home_head_line mr-8 ml-8"></span>
        <span className={`ml-8 ${show && "rotate180"}`}>
            <DownIcon />
          </span>
      </div>
      <div className="main-accordina_main">
        {show && data &&
          data.length > 0 &&
          data.map((item) => (
            <MainCard
              key={item.id}
              image={item.image}
              name={item.title}
              price={item.price}
              handleIncrement={() => dispatch(addtoCart(item))}
              handleDecrement={() => dispatch(removeFromCart(item.id))}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
};
