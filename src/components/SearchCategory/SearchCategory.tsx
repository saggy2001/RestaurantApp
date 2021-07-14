import React from "react";
import "./SearchCategory.css";

const SearchCategory = () => {
  return (
    <>
      <div className="category-container">
        <p>Searching in</p>
        <select>
          <option>All</option>
        </select>
      </div>
      <hr />
      <div className="img-container">
        <p>type a product to start searching</p>
        <img src="./images/search.svg" alt="search" />
      </div>
    </>
  );
};

export default SearchCategory;
