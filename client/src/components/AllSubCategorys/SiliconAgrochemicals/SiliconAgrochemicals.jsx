import React from "react";
import "./SiliconAgrochemicals.scss";

const data = [
  {
    productsTitle: "Key Silicon-Based Products in Agriculture",
    products: [
      {
        name: "Silicon Dioxide Powder",
        description:
          "Acts as a soil amendment to improve soil structure and aeration.",
        benefits: [
          "Enhances plant resistance to biotic (pests, fungi) and abiotic (drought, salinity) stress.",
          "Used in formulations for controlled nutrient release.",
        ],
      },
      {
        name: "Silica for Agriculture",
        description:
          "Improves mechanical strength of plant cells, reducing lodging in crops like rice and wheat.",
        benefits: [
          "Enhances photosynthesis efficiency by optimizing light absorption.",
          "Acts as a carrier in agrochemical formulations.",
        ],
      },
      {
        name: "Water-Soluble Liquid Silica",
        description:
          "Provides readily available silicon to plants through foliar or soil application.",
        benefits: [
          "Boosts crop immunity and reduces susceptibility to fungal infections.",
          "Improves nutrient absorption, particularly phosphorus and potassium.",
        ],
      },
      {
        name: "Water-Soluble Powder Silica",
        description:
          "Convenient for easy mixing in fertilizers and pesticides.",
        benefits: [
          "Strengthens plant cell walls, increasing resistance to pathogens and insect attacks.",
          "Enhances drought tolerance by reducing transpiration loss.",
        ],
      },
      {
        name: "Silicon Defoamers",
        description:
          "Reduces foam formation in agrochemical formulations such as pesticides, herbicides, and fertilizers.",
        benefits: [
          "Ensures smooth application and better coverage on plant surfaces.",
          "Prevents clogging of spray nozzles, enhancing application efficiency.",
        ],
      },
      {
        name: "Potassium Silicate Powder",
        description: "Acts as a plant growth promoter and stress reliever.",
        benefits: [
          "Enhances plant resistance to fungal diseases like powdery mildew and rust.",
          "Improves fruit quality and yield in horticultural crops.",
        ],
      },
      {
        name: "Potassium Silicate Liquid",
        description:
          "Provides a bioavailable source of potassium and silicon for plants.",
        benefits: [
          "Strengthens plant cell walls, making them more resistant to pests and environmental stress.",
          "Used as a foliar spray to enhance drought resistance.",
        ],
      },
      {
        name: "Sodium Silicate Liquid",
        description:
          "Used as a binder and stabilizer in agrochemical formulations.",
        benefits: [
          "Acts as a soil conditioner, improving soil texture and water retention.",
          "Helps in the controlled release of nutrients for sustained plant growth.",
        ],
      },
    ],
    benefitsTitle: "Benefits of Silicon-Based Agrochemical Products",
    benefits: [
      "Enhanced Plant Resistance – Strengthens cell walls, reducing disease and pest damage.",
      "Improved Nutrient Uptake – Aids in the absorption of phosphorus, calcium, and other essential nutrients.",
      "Drought & Salinity Tolerance – Helps plants retain moisture and withstand extreme weather conditions.",
      "Eco-Friendly & Sustainable – Supports soil health and reduces dependency on synthetic fertilizers.",
      "Better Crop Yield & Quality – Increases productivity and enhances fruit and grain quality.",
    ],
  },
];

const SiliconAgrochemicals = () => {
  return (
    <div className="containerss">
      <h1 className="title">{data[0].productsTitle}</h1>

      {data.map((section, index) => (
        <div key={index} className="section">
          {/* <h1 className="title">{section.title}</h1> */}
          {/* <p className="description">{section.description}</p> */}
          {section.products && (
            <div className="pro-con">
              {/* <h2 className="section-title">{section.productsTitle}</h2> */}
              <div className="products">
                {section.products.map((product, idx) => (
                  <div key={idx} className="product-card">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <ul className="product-list">
                      {product.benefits.map((benefit, bIdx) => (
                        <li key={bIdx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {section.benefits && (
            <>
              <h2 className="section-title mt-5">{section.benefitsTitle}</h2>
              <ul className="benefits-list">
                {section.benefits.map((benefit, bIdx) => (
                  <li key={bIdx}> {benefit}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SiliconAgrochemicals;
