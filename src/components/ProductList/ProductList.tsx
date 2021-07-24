import React from "react";
import ProductCard from "../ProductCard/ProductCard";
type Props = {
  data: {
    title: string;
    url: string;
    id: number;
  }[];
};
const ProductList = ({ data }: Props) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ProductCard
            key={index}
            title={item.title}
            url={item.url}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
