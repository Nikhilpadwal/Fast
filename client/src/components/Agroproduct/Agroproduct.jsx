import React from "react";
import "./Agroproduct.scss";
import { useNavigate } from "react-router-dom";

const Agroproduct = ({ product }) => {
  const navigate = useNavigate();

  console.log(product);

  return (
    <div className="containers">
      <div className="innerSecton">
        {product.map((category, index) => (
          <div className="singleProduct shadow" key={index}>
            <div className="right-details">
              <h3>{category.subcategory}</h3>
              <div className="line"></div>
              <button
                onClick={() => {
                  if (category?.link) {
                    window.scrollTo({ top: 0, behavior: "smooth" });

                    if (category?.link === "/Agro") {
                      navigate(
                        `/category/${category.category.replace(/ /g, "_")}`,
                        {
                          state: { subcategories: category },
                        }
                      );
                    } else if (category?.link) {
                      navigate(category.link, {
                        state: { subcategories: category },
                      });
                    }
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(
                      `/products/${category?.subcategory?.replace(
                        / /g,
                        "_"
                      )}/1`,
                      {
                        state: { subcategories: category },
                      }
                    );
                  }
                }}
              >
                View All
              </button>
            </div>
            <div className="left-img">
              <img src={category?.image} alt={category.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agroproduct;
