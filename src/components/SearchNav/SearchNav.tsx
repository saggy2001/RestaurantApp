import React from "react";
import "./SearchNav.css";
import * as AiIcons from "react-icons/ai";

const SearchNav = () => {
  return (
    <div className="container">
      <h1>Search</h1>
      <div className="cart-button">
        <AiIcons.AiOutlineShoppingCart size={20} color="green" />
      </div>
    </div>
  );
};

export default SearchNav;
