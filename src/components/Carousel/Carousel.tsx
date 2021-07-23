import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <img
          src="./images/restaurant1.jpg"
          alt="res1"
          className="carouselImage"
        />

        <img
          src="./images/restaurant2.jpg"
          alt="res1"
          className="carouselImage"
        />
        <img
          src="./images/restaurant3.jpg"
          alt="res1"
          className="carouselImage"
        />
        <img
          src="./images/restaurant4.jpg"
          alt="res1"
          className="carouselImage"
        />
      </Slider>
    </div>
  );
};

export default Carousel;
