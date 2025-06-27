import React from "react";
import "./PlantGrowth.scss";

const plantGrowthData = {
  sections: [
    {
      title: "What Are Plant Growth Promoters?",
      description:
        "Plant Growth Promoters (PGPs) are natural or synthetic substances that enhance the growth, development, and productivity of plants.",
    },
    {
      title: "Why Use Plant Growth Promoters?",
      points: [
        "Stimulates Root & Shoot Growth – Enhances plant structure and nutrient absorption.",
        "Increases Crop Yield & Quality – Ensures better flowering, fruiting, and overall productivity.",
        "Improves Nutrient Uptake – Helps plants absorb essential minerals more efficiently.",
        "Enhances Resistance to Stress – Protects against drought, diseases, and environmental stress.",
        "Eco-Friendly & Sustainable – Supports organic and chemical-free farming.",
      ],
    },
    {
      title: "Types of Plant Growth Promoters",
      categories: [
        "Organic Plant Growth Promoters",
        "Hormonal Growth Promoters",
        "Bio-Stimulants & Microbial PGPs",
        "Enzyme-Based Growth Promoters",
        "Nutrient-Based Growth Enhancers",
      ],
    },
    {
      title: "Applications of Plant Growth Promoters",
      applications: [
        "Agriculture & Farming",
        "Horticulture & Floriculture",
        "Hydroponics & Organic Farming",
        "Turf & Lawn Care",
        "Forestry & Plantation Crops",
      ],
    },
  ],
};

const PlantGrowth = () => {
  return (
    <div className="plant-growth-container">
      {plantGrowthData.sections.map((section, index) => (
        <div key={index} className="plant-section">
          <h2 className="plant-title">{section.title}</h2>
          {section.description && <p>{section.description}</p>}
          {section.points && (
            <ul>
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          {/* <div className="outerdiv"> */}
          {section.categories && (
            <div className="categories">

              <ul>
                {section.categories.map((category, idx) => (
                  <li key={idx}>{category}</li>
                ))}
              </ul>
            </div>
          )}
          {section.applications && (
            <ul className="applications">
              {section.applications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          )}
        </div>
        // </div>
      ))}
    </div>
  );
};

export default PlantGrowth;
