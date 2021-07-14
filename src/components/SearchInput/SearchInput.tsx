import React from "react";
import "./SearchInput.css";
import * as AiIcons from "react-icons/ai";

const SearchInput = () => {
  return (
    <div className="input-conatiner">
      <AiIcons.AiOutlineSearch />
      <input className="input-text" type="text" placeholder="Search" />
    </div>
  );
};

export default SearchInput;
