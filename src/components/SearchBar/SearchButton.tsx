import React from "react";
import * as AiIcons from "react-icons/ai";
import "./SearchButton.css";
const SearchButton = () => {
  return (
    <div>
      <div className="button-conatiner">
        <AiIcons.AiOutlineSearch />
        <p className="button-text">Search All products here</p>
      </div>
    </div>
  );
};

export default SearchButton;
