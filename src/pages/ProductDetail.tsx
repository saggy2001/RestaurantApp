import React from "react";
import ProductCarousel from "../components/ProductDetail/ProductCarousel";
import DetailNav from "../components/ProductDetail/DetailNav";
import Description from "../components/ProductDetail/Description";
import { useParams } from "react-router-dom";
import { Products } from "../Data/Products";

const ProductDetail = () => {
  interface ParamTypes {
    productId: string;
  }

  let { productId } = useParams<ParamTypes>();
  let id: number = parseInt(productId);
  const product: { title: string; url: string; id: number } = Products[id];
  return (
    <div>
      <DetailNav title={product.title} />
      <ProductCarousel url={product.url} />
      <Description title={product.title} id={product.id} />
    </div>
  );
};

export default ProductDetail;
