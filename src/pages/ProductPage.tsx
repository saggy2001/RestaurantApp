import React from "react";
import PageNav from "../components/PageNav/PageNav";
import ProductList from "../components/ProductList/ProductList";
import SearchButton from "../components/SearchBar/SearchButton";
import { Products } from "../Data/Products";

type Props = {
  onAdd: Function;
  cartCount: number;
};
const ProductPage = ({ onAdd, cartCount }: Props) => {
  return (
    <div>
      <PageNav header="Product" cartCount={cartCount} />
      <SearchButton />
      <ProductList data={Products} onAdd={onAdd} />
    </div>
  );
};

export default ProductPage;
