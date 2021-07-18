import React from "react";
import Slider from "react-slick";

const ProductCarousel = ({ url }: { url: string }) => {
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
    arrows: false,
  };
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <Slider {...settings}>
        <img src={url} alt="res1" />

        {/* <img src="./images/restaurant2.jpg" alt="res1" /> */}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
