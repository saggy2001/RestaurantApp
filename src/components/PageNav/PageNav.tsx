import React from "react";
import CartButton from "../Common Components/CartButton";
import "./PageNav.css";
type Props = {
  header: string;
};

const PageNav = ({ header }: Props) => {
  return (
    <div className="container">
      <h1>{header}</h1>
      <CartButton />
    </div>
  );
};

export default PageNav;
