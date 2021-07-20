import React from "react";
import "./Description.css";
import { Products } from "../../Data/Products";

const Description = ({
  title,
  onAdd,
  id,
}: {
  title: string;
  onAdd: Function;
  id: number;
}) => {
  return (
    <div className="description">
      <h3>{title}</h3>
      <p>
        Available from 12 pm to 9pm!! Best Biryanies are here. Choose your
        Favourite One
      </p>
      <div className="btn-wrapper">
        <div className="amount-btn active">1 Roll(Aminia)</div>
        <div className="amount-btn">1 Roll(Arsalan)</div>
      </div>
      <div className="price-box">
        <span className="price">₹45</span>
        <span>/1 Roll (Aminia)</span>
      </div>
      <div className="add-cart" onClick={() => onAdd(Products[id])}>
        Add to cart
      </div>
    </div>
  );
};

export default Description;
