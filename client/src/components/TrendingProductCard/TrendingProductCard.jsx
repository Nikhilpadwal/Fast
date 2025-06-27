import React from "react";
import "./TrendingProductCard.scss";
import { useNavigate } from "react-router-dom";

const TrendingProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <section
      className="trending-card"
      // onClick={(event) => {
      //   const productName = product?.Name?.trim().replace(/\s+/g, "_");
      //   const productCode = product?.ProductCode?.trim().replace(/\s+/g, "_");

      //   const newTabUrl = productCode
      //     ? `/product-details/${encodeURIComponent(
      //         productName
      //       )}/${encodeURIComponent(productCode)}`
      //     : `/product-details/${encodeURIComponent(productName)}`;

      //   if (event.ctrlKey || event.metaKey || event.button === 1) {
      //     window.open(newTabUrl, "_blank");
      //   } else {
      //     window.scrollTo({ top: 0, behavior: "smooth" });
      //     navigate(newTabUrl);
      //   }
      // }}
      onClick={(event) => {
        let newTabUrl = "";
        if (product?.Name === "Orthosilicic Acid 2% WSL") {
          newTabUrl = "/Orthosilicic_Acid";
        } else if (product?.Name === "Powder Silicon Spreader") {
          newTabUrl = "/Fensil360";
        } else if (product?.Name === "pH Balancer (Multibalance 4 in 1)") {
          newTabUrl = "/MultiBalance4IN1";
        } else {
          const productName = product?.Name?.trim().replace(/\s+/g, "_");
          const productCode = product?.ProductCode?.trim().replace(/\s+/g, "_");

          newTabUrl = productCode
            ? `/product-details/${encodeURIComponent(
                productName
              )}/${encodeURIComponent(productCode)}`
            : `/product-details/${encodeURIComponent(productName)}`;
        }

        if (event.ctrlKey || event.metaKey || event.button === 1) {
          window.open(newTabUrl, "_blank");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate(newTabUrl);
        }
      }}
    >
      <div className="image-container">
        <img src={product?.Image[0]} alt="service-image" className="image" />
      </div>

      <div className="details-container">
        <div className="top-container">
          <h4
            className="title"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product?.Name}
          </h4>
          <p className="category">
            {product?.SubCategories?.Name || product?.Categories?.Name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrendingProductCard;
