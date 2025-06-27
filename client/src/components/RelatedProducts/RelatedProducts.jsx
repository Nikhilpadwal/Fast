import React from "react";
import "./RelatedProducts.scss";

import TrendingProductCard from "../TrendingProductCard/TrendingProductCard";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const RelatedProducts = ({ products }) => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "30%",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "30%", // On smaller screens, show a smaller part of the next image
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          centerPadding: "15%", // On smaller screens, show a smaller part of the next image
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "8%", // On smaller screens, show a smaller part of the next image
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
    ],
  };

  const navigate = useNavigate();

  return (
    <section className="related-products">
      <div className="heading-section">
        <h5 className="heading">Related Products</h5>

        <div
          className="view-all-container"
          onClick={(event) => {
            if (event.ctrlKey || event.metaKey || event.button === 1) {
              const newTabUrl = "/Categories";
              window.open(newTabUrl, "_blank");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/Categories");
            }
          }}
        >
          <p>View all</p>
          <FaArrowRight className="arrow" />
        </div>
      </div>

      <div className="all-related-products">
        <div className="trending-cards">
          <Slider {...sliderSettings}>
            {products.map((item, index) => (
              <TrendingProductCard key={index} product={item} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
