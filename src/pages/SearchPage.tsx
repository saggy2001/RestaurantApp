import React, { ChangeEvent, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
// import SearchCategory from "../components/SearchCategory/SearchResult";
import SearchInput from "../components/SearchInput/SearchInput";
import SearchNav from "../components/SearchNav/SearchNav";
import { Products } from "../Data/Products";
const SearchPage = () => {
  const [input, setInput] = useState("");
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  const filteredProducts = Products.filter((data) => {
    return data.title.toLowerCase().includes(input.toLowerCase());
  });
  return (
    <div>
      <SearchNav />
      <SearchInput onInputChange={onInputChange} />
      {/* <SearchCategory /> */}
      <ProductList data={filteredProducts} />
    </div>
  );
};

export default SearchPage;
