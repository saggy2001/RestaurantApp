import React from "react";
import Carousel from "../components/Carousel/Carousel";
import MenuHeader from "../components/FoodMenu/MenuHeader";
import MenuList from "../components/FoodMenu/MenuList";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SearchButton from "../components/SearchBar/SearchButton";
import { MenuDetails } from "../Data/RestaurantMenu";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <Link to="/search">
        <SearchButton />
      </Link>

      <Carousel />
      <MenuHeader heading="Restaurant Food" />
      <MenuList MenuDetails={MenuDetails} />
      <MenuHeader heading="Sweets" />
      <MenuList MenuDetails={MenuDetails} />
      <MenuHeader heading="cold drinks and shakes" />
      <MenuList MenuDetails={MenuDetails} />
      <Footer />
    </div>
  );
};

export default HomePage;
