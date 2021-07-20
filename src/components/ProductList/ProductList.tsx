import React from "react";
import ProductCard from "../ProductCard/ProductCard";
type Props = {
  data: {
    title: string;
    url: string;
    id: number;
  }[];
  onAdd: Function;
};
const ProductList = ({ data, onAdd }: Props) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ProductCard
            key={index}
            title={item.title}
            url={item.url}
            id={item.id}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
