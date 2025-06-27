import React from "react";
import "./ServiceCard.scss";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();


  return (
    <div
      className="service-card"
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
      <div className="image-container">
        <img src={service?.image} alt="service-image" className="image" />
      </div>

      <div className="details-container">
        <h4 className="title">{service?.category}</h4>

        <div className="bottom-container">
          <p className="description">{service?.productDetails}</p>
        </div>

        <FaCircleArrowRight size={25} className="arrow" />
      </div>
    </div>
  );
};

export default ServiceCard;
