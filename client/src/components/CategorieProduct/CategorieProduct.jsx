import React from "react";
import "./CategorieProduct.scss";

import { useNavigate } from "react-router-dom";

export default function CategorieProduct({ categories }) {
  const navigate = useNavigate();
  return (
    <div className="CategorieProduct">
      <div className="top-section">
        <h4 className="head">CATEGORIES</h4>
        <h4 className="sec-head">
          Product We <span>Provide</span>
        </h4>
        <p>
          We are among the leading manufacturers and suppliers of this domain,
          broadly engrossed in <br /> offering a wide range of Industrial
          Chemicals. Offered chemicals are highly demanded among <br /> the
          customers for their accurate formulation and longer shelf life.
        </p>
      </div>
      <div className="innerSecton">
        {categories.map((category, index) => (
          <div className="singleProduct shadow" key={index}>
            <div className="right-details">
              <h3>{category.category}</h3>
              <div className="line"></div>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });

                  category?.link == "/Agro"
                    ? navigate(
                        `/category/${category.category.replace(/ /g, "_")}}`,
                        {
                          state: { subcategories: category },
                        }
                      )
                    : navigate(
                        `${category?.link}/${category?.category.replace(
                          / /g,
                          "_"
                        )}/0`,
                        {
                          state: { subcategories: category },
                        }
                      );
                }}
              >
                View All
              </button>
            </div>
            <div className="left-img">
              <img src={category.image} alt={category.category} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
