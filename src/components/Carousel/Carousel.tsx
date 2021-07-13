import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import restaurant1 from "../../images/restaurant1.jpg";
import restaurant2 from "../../images/restaurant2.jpg";

import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };
  return (
    <div
      style={{
        marginTop: "25px",
        marginBottom: "15px",
        width: "98%",
      }}
    >
      <Slider {...settings}>
        <img src={restaurant1} alt="res1" className="carouselImage" />

        <img src={restaurant2} alt="res1" className="carouselImage" />
      </Slider>
    </div>
  );
};

export default Carousel;
