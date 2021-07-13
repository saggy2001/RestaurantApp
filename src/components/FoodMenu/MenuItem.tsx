import React from "react";
// import restaurant1 from "../../images/restaurant1.jpg";
import "./MenuItem.css";
type Props = {
  title: string;
  url: string;
};

const MenuItem = ({ title, url }: Props) => {
  return (
    <div className="item-container">
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
        }}
        className="menu-item"
      >
        <h4 style={{ color: "#ffffff", textAlign: "center", padding: "2px" }}>
          {title}
        </h4>
      </div>
    </div>
  );
};

export default MenuItem;
