import React, { ChangeEvent } from "react";
import "./SearchInput.css";
import * as AiIcons from "react-icons/ai";
type Props = {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ onInputChange }: Props) => {
  return (
    <div>
      <div className="input-conatiner">
        <AiIcons.AiOutlineSearch />
        <input
          className="input-text"
          type="text"
          placeholder="Search"
          onChange={onInputChange}
        />
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
