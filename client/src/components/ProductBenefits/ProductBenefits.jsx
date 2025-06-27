import React from "react";
import "./ProductBenefits.scss";
import hand from "../../assets/Product/hand.png";
import time from "../../assets/Product/time.png";
import easy from "../../assets/Product/easy.png";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function ProductDetails({ benefits }) {
  console.log(benefits);
  return (
    <section className="benefits-section">
      <div className="innerSection">
        <div className="cardSection">
          {benefits?.map((benefit, key) => (
            <div className="cards" key={key}>
              <div className="icon">
                <img
                  src={key === 0 ? hand : key === 1 ? time : easy}
                  alt={benefit?.title}
                />
              </div>

              <h2>{benefit?.title}</h2>

              <ul>
                {benefit?.description?.map((description, index) => (
                  <li key={index}>
                    <li className="icons">
                      <IoCheckmarkCircleOutline size={15} />
                    </li>

                    {description.trim()}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
