import React from "react";
import "./TrendingProducts.scss";
import { FaArrowRight } from "react-icons/fa6";
import trending1 from "../../../assets/images/dummy/trending1.jpeg";
import trending2 from "../../../assets/images/dummy/trending2.png";
import trending3 from "../../../assets/images/dummy/trending3.png";
import TrendingProductCard from "../../TrendingProductCard/TrendingProductCard";

const TrendingProducts = () => {
  const trendingLists = [
    {
      image: trending1,
      title: "Neem Oil Emulsifier",
      category: "DIKO ENO",
      quantities: ["200ml"],
    },
    {
      image: trending2,
      title: "Acid Thickener",
      category: "FX T20",
      quantities: ["45Kgs", "180Kgs"],
    },
    {
      image: trending3,
      title: "Silicon Oil Emulsifier",
      category: "DIKO SOL 50",
      quantities: ["50Kgs", "200Kgs"],
    },
    {
      image: trending1,
      title: "Neem Oil Emulsifier",
      category: "DIKO ENO",
      quantities: ["200ml"],
    },
    {
      image: trending2,
      title: "Acid Thickener",
      category: "FX T20",
      quantities: ["45Kgs", "180Kgs"],
    },
  ];

  return (
    <section className="trending-products">
      <div className="left-section">
        <h2 className="heading">Products</h2>
        <h1 className="subheading">
          Some{" "}
          <span className="span-text primary-gradient-background">
            Trending
          </span>{" "}
          Products
        </h1>

        <div className="expole-btn btn-secondary">
          <p>Explore More</p>
          <FaArrowRight className="arrow" />
        </div>
      </div>

      <div className="right-section">
        <div className="trending-cards-wrapper">
          <div className="trending-cards">
            {trendingLists.map((item) => (
              <TrendingProductCard product={item} />
            ))}
          </div>

          <div className="scroll-blur"></div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
