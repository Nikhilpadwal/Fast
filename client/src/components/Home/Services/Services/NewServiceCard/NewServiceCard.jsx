import React from "react";
import Slider from "react-slick";
import { serviceLists } from "../../../../../constants/constants";
import { FaCircleArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./NewServiceCard.scss";
import { speed } from "jquery";
//done
export default function NewServiceCard() {
  const navigate = useNavigate();
  // const settings = {
  //   // infinite: true,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   // autoplaySpeed: 0,
  //   // pauseOnHover: false,
  //   // cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //   ],
  // };

  //done
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    dots: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          speed: 500,
          dots: false,
          cssEase: "linear",
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className="our-clients-sub">
      <div className="logo-carousel">
        <div id="gallery" className="scrollc">
          <Slider {...settings} className="owl-them">
            {serviceLists.map((service, id) => (
              <div
                className="service-cards mx-2"
                key={id}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  if (service?.link === "/Agro") {
                    navigate(
                      `/category/${service.category.replace(/ /g, "_")}`,
                      {
                        state: { subcategories: service },
                      }
                    );
                  } else {
                    navigate(
                      `${service?.link}/${service?.category.replace(
                        / /g,
                        "_"
                      )}/0`,
                      {
                        state: { subcategories: service },
                      }
                    );
                  }
                }}
              >
                <div className="image-containers">
                  <img
                    src={service?.image}
                    alt="service-image"
                    className="image"
                  />
                </div>

                <div className="details-containers">
                  <h4 className="title">{service?.category}</h4>

                  <div className="bottom-container">
                    <p className="description">{service?.productDetails}</p>
                  </div>

                  <FaCircleArrowRight size={20} className="arrow" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
