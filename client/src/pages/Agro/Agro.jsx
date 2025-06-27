import React, { useRef } from "react";

import "./Agro.scss";
import Agroproduct from "../../components/Agroproduct/Agroproduct";
import ProductTop from "../../components/ProductTop/ProductTop";
import Contact from "../../components/Contact/Contact";

import Adjuvant_For_SL from "../../assets/images/AgroEm/Adjuvant_For_SL.jpg";
import Conventional_Emulsifier from "../../assets/images/AgroEm/Conventional_Emulsifier.jpg";
import Emulsifier_for_EC from "../../assets/images/AgroEm/Emulsifier_for_EC.jpg";
import Nitrobenzene_Emulsifier from "../../assets/images/AgroEm/Nitrobenzene_Emulsifier.jpg";
import Oil_Emulsifier from "../../assets/images/AgroEm/Oil_Emulsifier.jpg";
import Surfactant_For_SC from "../../assets/images/AgroEm/Surfactant_For_SC.jpg";
import Surfactant_For_WP from "../../assets/images/AgroEm/Surfactant_For_WP.jpg";

import { useLocation } from "react-router-dom";

function Agro() {
  const location = useLocation();
  const { subcategories } = location.state || {};

  console.log(subcategories?.subcategories);

  const subCategoryRef = useRef(null);

  const handleScrollToSubCategory = () => {
    if (subCategoryRef.current) {
      subCategoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("SubCategory ref is null");
    }
  };

  return (
    <div className="mainagroProduct">
      <div
        className="product-section1"
        style={{
          backgroundImage: `url(${
            subcategories?.big197
              ? subcategories.big197
              : require("../../assets/Product/plantimg.png")
          })`,
        }}
      >
        <div className="imgSection">
          <div className="left-section">
            <p>Fenton Chemical's</p>

            <h1 className="product-name">{subcategories?.category}</h1>

            <div
              className="jump-btn-container"
              onClick={handleScrollToSubCategory}
            >
              <p>Jump to Sub Category</p>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </div>

      <ProductTop product={subcategories} />

      <div className="agro-container" ref={subCategoryRef}>
        <h2 className="text-center mb-3 agrohead">
          {subcategories?.category} &nbsp;
          <span>SubCategory</span>
        </h2>

        <div className="inner-head-2"></div>
        <Agroproduct product={subcategories?.subcategories} />
      </div>

      <Contact />
    </div>
  );
}

export default Agro;
