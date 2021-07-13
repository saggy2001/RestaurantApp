import React from "react";
import "./MenuHeader.css";
type Props = {
  heading: string;
};

const MenuHeader = ({ heading }: Props) => {
  return <h2 className="menu-header">{heading}</h2>;
};

export default MenuHeader;
