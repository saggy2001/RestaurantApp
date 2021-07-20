import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import "./CartButton.css";

const CartButton = ({ cartCount }: { cartCount: number }) => {
  return (
    <Link to="/cart" className="cart-button">
      <AiIcons.AiOutlineShoppingCart size={20} color="green" />
      {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : null}
    </Link>
  );
};

export default CartButton;
