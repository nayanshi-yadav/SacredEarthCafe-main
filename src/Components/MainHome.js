import React, { useState } from "react";
import { data } from "../utils/Data";
import { MainAccordian } from "./MainAccordian";

const MainHome = () => {
  const [mainItems] = useState(data.Main);
  return (
    <div className="special-home-root">
      {Object.keys(mainItems).map((acc, i) => (
        <MainAccordian key={i} acc={acc} data={mainItems[acc]} />
      ))}
    </div>
  );
};

export default MainHome;
