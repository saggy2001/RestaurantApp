import React from "react";
import ProductCard from "../ProductCard/ProductCard";
type Props = {
  data: {
    title: string;
    url: string;
  }[];
};
const ProductList = ({ data }: Props) => {
  return (
    <div>
      {data.map((item, index) => {
        return <ProductCard key={index} />;
      })}
    </div>
  );
};

export default ProductList;
