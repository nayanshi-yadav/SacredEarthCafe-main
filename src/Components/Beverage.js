import React, { useState } from "react";
import DownIcon from "../Assets/Icons/DownIcon";
import MainCard from "./MainCard";
import { data } from "../utils/Data";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../fearures/itemsSlice";

const Beverage = () => {
  const [beverageItems] = useState(data.Beverages);
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  return (
    <div className="special-home-root">
      <div className="special_home_header mb-16" onClick={() => setShow(!show)}>
        <div className="title14 color_sec mr-8">Special Beverage</div>
        <span className="special_home_head_line"></span>
        <span className="ml-8">
          <DownIcon />
        </span>
      </div>
      <div className="main-accordina_main">
        {show &&
          beverageItems.map((item) => (
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

export default Beverage;
