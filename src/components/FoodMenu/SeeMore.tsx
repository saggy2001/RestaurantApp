import React from "react";
import "./SeeMore.css";
import * as BiIcons from "react-icons/bi";
const SeeMore = () => {
  return (
    <div className="seemore-container">
      <div style={{}} className="seemore-item">
        <h4
          style={{
            color: "#27cf4b",
            textAlign: "center",
            padding: "2px",
            fontWeight: "normal",
          }}
        >
          See More
        </h4>
        <BiIcons.BiRightArrowCircle color="#27cf4b" size={20} />
      </div>
    </div>
  );
};

export default SeeMore;
