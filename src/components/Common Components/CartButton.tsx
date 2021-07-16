import React from "react";
import * as AiIcons from "react-icons/ai";
import "./CartButton.css";

const CartButton = () => {
  return (
    <div className="cart-button">
      <AiIcons.AiOutlineShoppingCart size={20} color="green" />
    </div>
  );
};

export default CartButton;
