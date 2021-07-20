import React from "react";
import CartButton from "../Common Components/CartButton";
import "./DetailNav.css";

const DetailNav = ({
  title,
  cartCount,
}: {
  title: string;
  cartCount: number;
}) => {
  return (
    <div className="detail-nav">
      <h3>{title}</h3>
      <CartButton cartCount={cartCount} />
    </div>
  );
};

export default DetailNav;
