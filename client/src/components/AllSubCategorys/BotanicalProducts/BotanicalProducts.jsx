import React from "react";
import "./BotanicalProducts.scss";

const botanicalProductsData = [
  {
    title: "Botanical Products – Nature’s Best for Health & Wellness",
    description:
      "Botanical products are derived from natural plant sources, including herbs, roots, leaves, flowers, and extracts. Botanical Agro Formulations provide effective and sustainable solutions for pest and disease management in agriculture. Our range of botanical products is designed to address various challenges faced by farmers, improving crop health and yield.",
    reasons: [
      "100% Natural & Plant-Based – Free from harmful chemicals and synthetic additives.",
      "Rich in Nutrients & Antioxidants – Supports health, immunity, and overall well-being.",
      "Eco-Friendly & Sustainable – Biodegradable and environmentally safe.",
      "Gentle & Safe for All Skin Types – Perfect for skincare and personal care products.",
      "Holistic Healing & Therapeutic Benefits – Used in herbal medicine and aromatherapy.",
    ],
    products: [
      {
        name: "Botanical Viricide",
        description:
          "A plant-derived formulation that combats viral infections in crops by inhibiting the replication and spread of plant viruses. It enhances the plant’s natural defense mechanisms and promotes healthy growth.",
      },
      {
        name: "Botanical Nematicide",
        description:
          "A natural solution targeting plant-parasitic nematodes, reducing their population while ensuring soil health remains intact. It prevents root damage and enhances nutrient absorption for better crop productivity.",
      },
      {
        name: "Botanical Fungicide",
        description:
          "An eco-friendly fungicidal formulation that effectively controls fungal diseases like powdery mildew, rust, and blight. It works by disrupting fungal growth and preventing spore germination, ensuring prolonged crop protection.",
      },
      {
        name: "Whitefly / Mites Special",
        description:
          "A specialized botanical formulation designed to control whiteflies and mites, preventing them from damaging crops. It acts through multiple modes of action, including repelling, inhibiting feeding, and disrupting reproductive cycles.",
      },
      {
        name: "Botanical Larvicide",
        description:
          "A naturally sourced solution for controlling insect larvae that pose threats to crops. It prevents larval development into harmful pests while being safe for beneficial insects and pollinators.",
      },
    ],
  },
];

const BotanicalProducts = () => {
  return (
    <div className="botanical-products">
      {botanicalProductsData.map((data, index) => (
        <div key={index}>
          <h1 className="bp-head">{data.title}</h1>
          <p className="bp-para">{data.description}</p>
          <h2 className="pb-title">Why Choose Botanical Products?</h2>
          <ul>
            {data.reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
          <h2 className="pb-title">Our Products</h2>
          <div className="product-container">
            {data.products.map((product, index) => (
              <div key={index} className="product">
                <h3 className="product-title">{product.name}</h3>
                <p className="bp-para">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotanicalProducts;
