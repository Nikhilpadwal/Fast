import React, { useState } from "react";
import "./Services.scss";
import { FaArrowRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import NewServiceCard from "./NewServiceCard/NewServiceCard";
import ServiceCard from "../ServiceCard/ServiceCard";
import { service } from "../../../../constants/constants";

const Services = () => {
  const navigate = useNavigate();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const cardsToShow = 3;

  // const handleNext = () => {
  //   setCurrentIndex(currentIndex + 1);
  // };

  // // Handle the 'Previous' button click
  // const handlePrev = () => {
  //   if (currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

  return (
    <div className="services">
      <div className="heading-container">
        <h3 className="heading">OUR PRODUCTS</h3>
      </div>

      <div className="subheading-container">
        <h1 className="subheading tertiary-gradient-background">
          What we{" "}
          <span className="span-text primary-gradient-background">offer</span>
        </h1>
      </div>

      <div className="para">
        <p className="para-text">
          We are among the leading manufacturers and suppliers of this domain,
          broadly engrossed in offering a wide range of Industrial Chemicals.
          Offered chemicals are highly demanded among the customers for their
          accurate formulation and longer shelf life.
        </p>
      </div>

      <div
        className="view-all-container"
        onClick={(event) => {
          if (event.ctrlKey || event.metaKey || event.button === 1) {
            const newTabUrl = "/Categories";
            const newWindow = window.open(newTabUrl, "_blank");

            // Make sure the new window scrolls to top after it is fully loaded
            newWindow.onload = () => {
              newWindow.scrollTo(0, 0);
            };
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/Categories");
          }
        }}
      >
        <p>View all</p>
        <FaArrowRight className="arrow" />
      </div>

      <div class="service-cards-wrapper">
        <div className="our_service">
          <div className="sercenew">
            {service.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
        <div className="newservicedd">
          <NewServiceCard />
        </div>

        <div class="scroll-blur"></div>
      </div>

      <div className="theme-color-contianer"></div>
    </div>
  );
};

export default Services;
