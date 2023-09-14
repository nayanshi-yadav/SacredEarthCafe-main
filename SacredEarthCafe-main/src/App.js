import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import './Assets/Css/Common.css';
import './App.css'
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
      </Provider>
    </Router>
  );
};

export default App;
