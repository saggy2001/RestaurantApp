import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img
          src="https://static.toiimg.com/thumb/63201465.cms?width=1200&height=900"
          alt="product"
        />
      </div>
      <div className="detail-container">
        <h4>Chicken Biryani</h4>
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
