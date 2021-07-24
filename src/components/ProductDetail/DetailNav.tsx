import React from "react";
import CartButton from "../Common Components/CartButton";
import "./DetailNav.css";

const DetailNav = ({ title }: { title: string }) => {
  return (
    <div className="detail-nav">
      <h3>{title}</h3>
      <CartButton />
    </div>
  );
};

export default DetailNav;
