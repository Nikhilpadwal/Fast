import React from "react";
import "./TopBanner.scss";


import banner4 from "../../../assets/images/FinalBanner/bn1.webp";
import banner5 from "../../../assets/images/FinalBanner/bn2.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 999 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 999 }}
      onClick={onClick}
    />
  );
}

const TopBanner = () => {
  const settingsHome = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <div className="top-banner">
      <Slider {...settingsHome}>
        <div className="item">
          <img src={banner5} alt="" className="logo-img" />
        </div>
        <div className="item">
          <img src={banner4} alt="" className="logo-img" />
        </div>
      </Slider>
    </div>
  );
};

export default TopBanner;
