import React, { ChangeEvent, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
// import SearchCategory from "../components/SearchCategory/SearchResult";
import SearchInput from "../components/SearchInput/SearchInput";
import PageNav from "../components/PageNav/PageNav";
import { Products } from "../Data/Products";
const SearchPage = ({
  onAdd,
  cartCount,
}: {
  onAdd: Function;
  cartCount: number;
}) => {
  const [input, setInput] = useState("");
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  const filteredProducts = Products.filter((data) => {
    return data.title.toLowerCase().includes(input.toLowerCase());
  });
  return (
    <div>
      <PageNav header="Search" cartCount={cartCount} />
      <SearchInput onInputChange={onInputChange} />
      {/* <SearchCategory /> */}
      <ProductList data={filteredProducts} onAdd={onAdd} />
    </div>
  );
};

export default SearchPage;
