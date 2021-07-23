import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";
type Props = {
  title: string;
  url: string;
  id: number;
};

const MenuItem = ({ title, url, id }: Props) => {
  return (
    <Link to={`product/${id}`}>
      <div className="item-container">
        <div
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
          }}
          className="menu-item"
        >
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
