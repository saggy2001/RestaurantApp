import React from "react";
import CartButton from "../Common Components/CartButton";
import "./PageNav.css";
type Props = {
  header: string;
  cartCount: number;
};

const PageNav = ({ header, cartCount }: Props) => {
  return (
    <div className="container">
      <h1>{header}</h1>
      <CartButton cartCount={cartCount} />
    </div>
  );
};

export default PageNav;
