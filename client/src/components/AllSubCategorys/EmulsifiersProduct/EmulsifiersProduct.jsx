import React from "react";
import "./EmulsifiersProduct.scss";

const productData = [
  {
    types: [
      {
        type: "Non-Ionic Emulsifiers",
        description:
          "Used for mild formulations, suitable for cosmetics and food.",
      },
      {
        type: "Anionic Emulsifiers",
        description:
          "Provide high stability, commonly used in detergents and agrochemicals.",
      },
      {
        type: "Cationic Emulsifiers",
        description:
          "Effective in acidic conditions, used in hair conditioners and asphalt emulsions.",
      },
      {
        type: "Amphoteric Emulsifiers",
        description:
          "Adaptable in different pH conditions, used in personal care products.",
      },
    ],
    applications: [
      {
        application: "Agrochemicals",
        description: "Enhancing pesticide and herbicide dispersion.",
      },
      {
        application: "Pharmaceuticals",
        description: "Used in creams, ointments, and drug formulations.",
      },
      {
        application: "Cosmetics & Personal Care",
        description: "Found in lotions, shampoos, and makeup.",
      },
      {
        application: "Food Industry",
        description: "Stabilizing dressings, sauces, and dairy products.",
      },
      {
        application: "Paints & Coatings",
        description: "Improving pigment dispersion and coating uniformity.",
      },
    ],
    benefits: [
      "High stability and efficiency in emulsification.",
      "Compatible with a wide range of formulations.",
      "Eco-friendly and biodegradable options available.",
      "Cost-effective solutions with consistent quality.",
    ],
  },
  // Add more products here
];

const EmulsifiersProduct = () => {
  return (
    <div className="emulsifiers-page">
      {productData.map((product, index) => (
        <div key={index} className="product-section">
          <h1 className="heading">{product.title}</h1>
          <p>{product.introduction}</p>
          <div className="main-container">
            <div className="left-container">
              <h2 className="subheading">Types of Conventional Emulsifiers</h2>
              <ul>
                {product.types.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.type}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-container">
              <h2 className="subheading">
                Applications of Conventional Emulsifiers
              </h2>
              <ul>
                {product.applications.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.application}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="subheading">
            Benefits of Using Fenton Chemical Emulsifiers
          </h2>
          <ul>
            {product.benefits.map((benefit, idx) => (
              <li key={idx}>
                {idx + 1}. {benefit}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EmulsifiersProduct;
