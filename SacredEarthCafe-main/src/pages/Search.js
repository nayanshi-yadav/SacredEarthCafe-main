import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../utils/Data";
import MainCard from "../Components/MainCard";
import { useDispatch } from "react-redux";
import { addtoCart, removeFromCart } from "../fearures/itemsSlice";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataItems] = useState(data);
  const [query, setQuery] = useState("");
  return (
    <div className="home_root">
      <div className="home_head">
        <div className="d-flex align-items-center pb-24">
          <div className="back_cta" onClick={() => navigate(-1)}>
            <ArrowBack />
          </div>
          <input
            type="text"
            className="search_input ml-16"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search your item.."
          />
        </div>
      </div>
      <div className="cart_main">
        {dataItems.Special.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ).map((item) => (
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
        {dataItems.Main["Acai Bowls"]
          .filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
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
        {dataItems.Main.Toasts.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ).map((item) => (
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
        {dataItems.Desserts.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ).map((item) => (
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
        {dataItems.Beverages.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        ).map((item) => (
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

export default Search;
