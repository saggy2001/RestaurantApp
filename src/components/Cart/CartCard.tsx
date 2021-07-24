import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import "./CartCard.css";
import { Products } from "../../Data/Products";
import { CartContext } from "../../App";

const CartCard = ({
  title,
  url,
  qty,
  id,
}: {
  title: string;
  url: string;
  qty: number;
  id: number;
}) => {
  const { removeItem, addItem, subtractItem } = useContext(CartContext);
  return (
    <div className="cart-card">
      <div className="card-img">
        <img src={url} alt="cart" />
      </div>
      <div className="card-detail">
        <h4>{title}</h4>
        <p>1 Plate</p>
        <span className="price">₹75</span>
        <MdDelete color="red" size="25px" onClick={() => removeItem(id)} />
      </div>
      <div className="item-counter">
        <span onClick={() => addItem(Products[id])}>+</span>
        <span>{qty}</span>
        <span onClick={() => subtractItem(Products[id])}>-</span>
      </div>
    </div>
  );
};

export default CartCard;
