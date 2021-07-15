import React from "react";
import "./ProductCard.css";
type Props = {
  title: string;
  url: string;
};

const ProductCard = ({ title, url }: Props) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={url} alt="product" />
      </div>
      <div className="detail-container">
        <h4>{title}</h4>
        <p>1 plate(Aminia)</p>
        <div>₹65</div>
      </div>
      <div className="add-btn">
        <span>+</span>
      </div>
    </div>
  );
};

export default ProductCard;
