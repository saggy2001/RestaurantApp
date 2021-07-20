import React from "react";
import { MdDelete } from "react-icons/md";
import "./CartCard.css";
import { Products } from "../../Data/Products";

const CartCard = ({
  title,
  url,
  qty,
  id,
  onAdd,
  onRemove,
  onDelete,
}: {
  title: string;
  url: string;
  qty: number;
  id: number;
  onAdd: Function;
  onRemove: Function;
  onDelete: Function;
}) => {
  return (
    <div className="cart-card">
      <div className="card-img">
        <img src={url} alt="cart" />
      </div>
      <div className="card-detail">
        <h4>{title}</h4>
        <p>1 Plate</p>
        <p className="price">₹75</p>
        <MdDelete
          color="red"
          size="25px"
          onClick={() => onDelete(Products[id])}
        />
      </div>
      <div className="item-counter">
        <span onClick={() => onAdd(Products[id])}>+</span>
        <span>{qty}</span>
        <span onClick={() => onRemove(Products[id])}>-</span>
      </div>
    </div>
  );
};

export default CartCard;
