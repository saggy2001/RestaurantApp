import React from "react";
import "./SeeMore.css";
import * as BiIcons from "react-icons/bi";
const SeeMore = () => {
  return (
    <div className="seemore-container">
      <div className="seemore-item">
        <h4>See More</h4>
        <BiIcons.BiRightArrowCircle color="#27cf4b" size={25} />
      </div>
    </div>
  );
};

export default SeeMore;
