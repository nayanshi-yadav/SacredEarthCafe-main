import React, { useState } from "react";
import Banner from "../Assets/Images/Banner.jpg";
import DownIcon from "../Assets/Icons/DownIcon";
import { data } from "../utils/Data";
import SpecialCard from "./SpecialCard";

const SpecialHome = () => {
  const [specials] = useState(data.Special);
  const [show, setShow] = useState(true);
  return (
    <div className="special-home-root">
      <div className="special_banner">
        <img src={Banner} alt="Banner" />
        <p className="body1 bannerText">
          Welcome to
          <br />
          Sacred Earth Cafe
        </p>
      </div>
      <div className="special_home_main">
        <div
          className="special_home_header mt-32 mb-16"
          onClick={() => setShow(!show)}
        >
          <div className="title14 color_sec mr-8">Today's Special</div>
          <span className="special_home_head_line"></span>
          <span className={`ml-8 ${show && "rotate180"}`}>
            <DownIcon />
          </span>
        </div>
        <div className="special_cards_root">
          <div className="row">
            {show && specials.map((item) => (
              <SpecialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialHome;
