import React from "react";
import "./SearchInput.css";
import * as AiIcons from "react-icons/ai";

const SearchInput = () => {
  return (
    <div>
      <div className="input-conatiner">
        <AiIcons.AiOutlineSearch />
        <input className="input-text" type="text" placeholder="Search" />
      </div>
      <div className="category-container">
        <p>Searching in</p>
        <select>
          <option>All</option>
        </select>
      </div>
      <hr className="line" />
    </div>
  );
};

export default SearchInput;
