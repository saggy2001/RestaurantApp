import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
type Props = {
  title: string;
  url: string;
  id: number;
};

const ProductCard = ({ title, url, id }: Props) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="card-container">
        <div className="img-container">
          <img src={url} alt="product" />
        </div>
        <div className="detail-container">
          <h4>{title}</h4>
          <p>1 plate(Aminia)</p>
          <div>₹65</div>
        </div>
        {/* </Link> */}
        <div className="add-btn">
          <span>+</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
