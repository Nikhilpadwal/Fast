import React from "react";
import { accordionData } from "../../constants/Eventdata";
import "./NewEvents.scss";

import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <IoMdArrowDroprightCircle />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <IoMdArrowDropleftCircle />
    </div>
  );
};
//
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
export default function NewEvents() {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "30%",
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "30%",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="ev px-4">
        <div className="accordion" id="accordionExample">
          {accordionData?.map((item, index) => (
            <div className="accordion-item" key={item?.id}>
              <h2 className="accordion-header" id={`heading${item?.id}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item?.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${item?.id}`}
                >
                  {item?.title}
                </button>
              </h2>

              <div
                id={`collapse${item?.id}`}
                className="accordion-collapse show"
              >
                <div className="accordion-body">
                  {item?.subsections?.map((sub) => (
                    <div key={sub?.subId} className="subsection mb-4">
                      <h3
                        className="enventTitle"
                        style={{ marginTop: sub?.mt }}
                      >
                        {sub?.subId} :- {sub?.subTitle}
                      </h3>

                      <div className="image-carousel">
                        <Slider {...sliderSettings}>
                          {sub?.images.map((image, index) => (
                            <div className="image-container" key={index}>
                              <img
                                src={image}
                                alt={`Subsection ${sub?.subId} - Slide ${
                                  index + 1
                                }`}
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                      {sub?.speaker && (
                        <h6>
                          <b>Speaker :-</b> {sub?.speaker}.
                        </h6>
                      )}
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
