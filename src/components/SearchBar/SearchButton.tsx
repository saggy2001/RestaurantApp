import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import "./SearchButton.css";
const SearchButton = () => {
  return (
    <Link to="/search">
      <div>
        <div className="button-conatiner">
          <AiIcons.AiOutlineSearch />
          <p className="button-text">Search All products here</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchButton;
