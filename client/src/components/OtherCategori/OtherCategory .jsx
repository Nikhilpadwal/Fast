import React from "react";
import "./OtherCategory.scss";
function OtherCategory() {
  const product = {
    title:
      "Solvents & Additives by Fenton Chemicals for the Agrochemical Industry",
    description: [
      "Fenton Chemicals offers a diverse range of solvents and specialty additives designed to enhance the stability, performance, and efficiency of agrochemical formulations.",
      "Our solutions help improve solubility, optimize formulation consistency, and ensure better application in the field.",
      "We provide high-quality solvents that act as carriers for active ingredients, along with mineral powders like talc and kaolin that serve as flow enhancers.",
      "Additionally, our agricultural pH balancers help maintain formulation stability, while anti-caking agents prevent clumping in powdered products.",
      "To enhance water retention in soil, we offer water-absorbent polymers, and our stabilizers and antifreeze agents ensure product effectiveness across varying climatic conditions.",
      "With a commitment to innovation and quality, Fenton Chemicals delivers tailored solutions to meet the evolving needs of the agrochemical industry.",
    ],
  };

  return (
    <div className="other-category">
      <h1>{product.title}</h1>
      {product.description.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}
    </div>
  );
}

export default OtherCategory;
