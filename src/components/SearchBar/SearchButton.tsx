import React from "react";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import "./SearchButton.css";
const SearchButton = () => {
  return (
    <Link to="/search">
      <div className="button-container">
        <FiIcons.FiSearch size={20} color={"#5e5e5e"} />
        <p className="button-text">Search All products here</p>
      </div>
    </Link>
  );
};

export default SearchButton;
