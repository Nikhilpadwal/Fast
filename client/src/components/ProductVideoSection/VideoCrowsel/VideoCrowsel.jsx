import React from "react";
import { useNavigate } from "react-router-dom";

import "./VideoCrowsel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
// 
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

export default function VideoCrowsel({ direction, videoLinks }) {
  const navigate = useNavigate();

  // console.log(videoLinks);

  const settings = {
    infinite: true,
    speed: 2000,             // Transition animation duration (2 seconds)
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,        // 0 delay between transitions (continuous effect)
    pauseOnHover: true,
    cssEase: "linear",       // Linear makes continuous movement smoother
    centerPadding: "40px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
  
   
  



  return (
    <div className="our-clients">
      <div className="our-clients-sub">
        <Slider {...settings} className="owl-themesss">
          {videoLinks.map((item, id) => {
            // Extract YouTube Video ID from various possible URL formats
            const videoIdMatch = item.match(
              /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|.*[?&]v=))([^"&?\/\s]+)/
            );
            const videoId = videoIdMatch ? videoIdMatch[1] : null;

            return (
              <div className="item " key={id}>
                <div
                  className="video-container"
                  onClick={(event) => {
                    if (event.ctrlKey || event.metaKey || event.button === 1) {
                      window.open(item, "_blank");
                    } else {
                      window.scrollTo(0, 0);
                      navigate(item);
                    }
                  }}
                >
                  {videoId ? (
                    <iframe
                      width="80%"
                      height="250px"
                      className="videos"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube Video ${id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      // allowFullScreen
                    ></iframe>
                  ) : (
                    <p>Invalid YouTube Link</p>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
