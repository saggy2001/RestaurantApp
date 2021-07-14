import React from "react";
import SearchCategory from "../components/SearchCategory/SearchCategory";
import SearchInput from "../components/SearchInput/SearchInput";
import SearchNav from "../components/SearchNav/SearchNav";

const SearchPage = () => {
  return (
    <div>
      <SearchNav />
      <SearchInput />
      <SearchCategory />
    </div>
  );
};

export default SearchPage;
