import React from "react";
import ProductList from "../components/ProductList/ProductList";
// import SearchCategory from "../components/SearchCategory/SearchResult";
import SearchInput from "../components/SearchInput/SearchInput";
import SearchNav from "../components/SearchNav/SearchNav";
import { MenuDetails } from "../Data/RestaurantMenu";

const SearchPage = () => {
  return (
    <div>
      <SearchNav />
      <SearchInput />
      {/* <SearchCategory /> */}
      <ProductList data={MenuDetails} />
    </div>
  );
};

export default SearchPage;
