import React from "react";
import MenuItem from "./MenuItem";
import "./MenuList.css";
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
    </div>
  );
};

export default MenuList;
