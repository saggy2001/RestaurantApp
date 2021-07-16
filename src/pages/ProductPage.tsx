import React from "react";
import PageNav from "../components/PageNav/PageNav";
import ProductList from "../components/ProductList/ProductList";
import SearchButton from "../components/SearchBar/SearchButton";
import { Products } from "../Data/Products";
const ProductPage = () => {
  return (
    <div>
      <PageNav header="Product" />
      <SearchButton />
      <ProductList data={Products} />
    </div>
  );
};

export default ProductPage;
