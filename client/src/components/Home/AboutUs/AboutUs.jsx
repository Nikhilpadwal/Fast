import React, { useState } from "react";
import "./AboutUs.scss";
import { MdArrowOutward } from "react-icons/md";
import { aboutPoints, stats } from "../../../constants/constants";

const AboutUs = () => {
  const [isHover, setIsHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <section className="about-us">
      <div className="header-container">
        <div className="heading-container">
          <h3 className="heading">Strengths</h3>
          <h1 className="subheading">
            What Makes Us{" "}
            <span className="span-text primary-gradient-background">
              Different
            </span>{" "}
            From Others
          </h1>
        </div>

        <p className="right-heading">
          Millions of Industries and Families have trusted us with their
          chemical needs.
        </p>
      </div>

      <div className="bottom-container">
        <div className="left-container">
          <div className="about-points-container">
            {aboutPoints?.map((item, index) => {
              console.log(item?.id, " ", index);

              return (
                <div
                  className="single-point"
                  onMouseEnter={() => {
                    if (item?.id === index) {
                      setIsHover(true);
                      setCurrentIndex(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item?.id === index) {
                      setIsHover(false);
                      setCurrentIndex(-1);
                    }
                  }}
                >
                  {isHover && currentIndex === index ? (
                    <p className="about-title">{item?.title}</p>
                  ) : (
                    <img src={item?.icon} alt={item?.title} className="icon" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="right-container">
          <div className="stats-container">
            {stats?.map((item) => (
              <div className="stat">
                <h1 className="primary-gradient-background">
                  {item?.count + "+"}
                </h1>
                <p>{item?.title}</p>
              </div>
            ))}
          </div>

          {/* <div className="check-container">
            <p className="tag">Don't trust what others say, see yourself.</p>

            <div className="check-bottom">
              <h1>Checkout Our Products.</h1>
              <MdArrowOutward className="arrow" />
            </div>
          </div> */}

          {/* <div className="overlay"></div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
