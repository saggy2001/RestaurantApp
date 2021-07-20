import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import { Products } from "../../Data/Products";

type Props = {
  title: string;
  url: string;
  id: number;
  onAdd: Function;
};

const ProductCard = ({ title, url, id, onAdd }: Props) => {
  return (
    // <Link to={`/product/${id}`}>
    <div className="card-container">
      <Link to={`/product/${id}`}>
        <div className="img-container">
          <img src={url} alt="product" />
        </div>
        <div className="detail-container">
          <h4>{title}</h4>
          <p>1 plate(Aminia)</p>
          <div>₹65</div>
        </div>
      </Link>
      {/* </Link> */}
      <div className="add-btn">
        <span onClick={() => onAdd(Products[id])}>+</span>
      </div>
    </div>
    // </Link>
  );
};

export default ProductCard;
