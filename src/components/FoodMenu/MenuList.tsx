import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import "./MenuList.css";
import SeeMore from "./SeeMore";
type Props = {
  MenuDetails: {
    title: string;
    url: string;
  }[];
};

const MenuList = ({ MenuDetails }: Props) => {
  return (
    <div className="menu-list">
      {MenuDetails.map((value, index) => {
        return <MenuItem key={index} title={value.title} url={value.url} />;
      })}
      <Link to="/product">
        <SeeMore />
      </Link>
    </div>
  );
};

export default MenuList;
