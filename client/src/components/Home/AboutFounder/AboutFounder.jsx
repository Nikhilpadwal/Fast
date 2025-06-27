import React, { useEffect, useState } from "react";
import "./AboutFounder.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { foundersList } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";

const AboutFounder = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timeout = setTimeout(() => setTransitioning(false), 300);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const words = foundersList[activeIndex]?.name.split(" ");
  const firstWord = words.slice(0, 1).join(" ");
  const remainingWords = words.slice(1).join(" ");

  const navigate = useNavigate();

  return (
    <section className="about-founder">
      <div className="left-container">
        <div className="heading-container">
          <h3 className="heading">Know us better</h3>

          <h1
            className={`subheading fade-in ${
              transitioning ? "" : "fade-in-active"
            }`}
          >
            {firstWord}{" "}
            <span className="primary-gradient-background">
              {remainingWords}
            </span>
          </h1>

          <p
            className={`role-text fade-in ${
              transitioning ? "" : "fade-in-active"
            }`}
          >
            {foundersList[activeIndex]?.role}
          </p>
        </div>

        <div
          className={`para fade-in ${transitioning ? "" : "fade-in-active"}`}
        >
          <p className="about-para">{foundersList[activeIndex]?.description}</p>
        </div>

        <div
          className="btn-primary"
          onClick={(event) => {
            if (event.ctrlKey || event.metaKey || event.button === 1) {
              // If Ctrl (or Command on macOS) or middle mouse button is clicked

              const newTabUrl = "/about";
              window.open(newTabUrl, "_blank");
            } else {
              // Default behavior for normal left-click
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/about");
            }
          }}
        >
          <p>Know our story</p>
          <FaArrowRight size={17} />
        </div>
      </div>

      <div className="right-container">
        <div className="image-container">
          <div className="arrow-container">
            <div
              className="arrow"
              onClick={() => {
                if (activeIndex === 0) setActiveIndex(foundersList.length - 1);
                else setActiveIndex((activeIndex - 1) % foundersList.length);
              }}
            >
              <FaArrowLeft size={20} color={"var(--text-secondary)"} />
            </div>

            <div
              className="arrow"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % foundersList.length)
              }
            >
              <FaArrowRight size={20} color={"var(--text-secondary)"} />
            </div>
          </div>

          <img
            src={foundersList[activeIndex]?.image}
            alt="founder-image"
            className={`founder-image ${
              transitioning ? "" : "founder-image-active"
            }`}
          />

          <div className="square-image-container"></div>
        </div>
      </div>

      <div className="about-founder-overlay"></div>
    </section>
  );
};

export default AboutFounder;
