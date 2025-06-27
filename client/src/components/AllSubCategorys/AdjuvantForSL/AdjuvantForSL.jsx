import React from "react";
import "./AdjuvantForSL.scss";

// Data stored in an array of objects
const adjuvantData = [
  {
    title: "Key Benefits of Fenton’s SL Adjuvants",
    content:
      "Fenton’s SL adjuvants are designed to enhance the efficiency and stability of agrochemical applications. With superior solubility, bioavailability, and compatibility, they ensure optimal performance while reducing chemical usage. Our scientifically proven formulations provide long-term stability, preventing separation and maintaining homogeneity for uniform application.",
  },
  {
    title: "Key Features & Advantages",
    content: [
      "Enhances Solubility & Dispersion – Ensures complete dissolution in water, preventing precipitation or clogging.",
      "Boosts Bioavailability – Increases plant uptake and absorption, leading to better results with lower chemical usage.",
      "Prevents Separation – Maintains homogeneity for uniform spray application.",
      "Improves Storage Stability – Extends shelf life by preventing crystallization or sedimentation over time.",
      "Compatible with Multiple Formulations – Works seamlessly with pesticides, herbicides, fungicides, and plant growth regulators.",
      "Superior Performance – High-quality formulation ensures improved efficiency and application results.",
      "Custom Solutions – Tailored adjuvant solutions to meet specific agricultural needs.",
      "Cost-Effective – Reduces overall chemical usage while maximizing effectiveness.",
      "Scientifically Proven Stability – Rigorously tested for compatibility, stability, and effectiveness in various conditions.",
    ],
  },
  {
    title: "Applications of SL Adjuvants",
    content:
      "Agriculture – Used in herbicides, insecticides, fungicides, and PGRs (Plant Growth Regulators) to improve efficiency and reduce wastage. Enhances the solubility and absorption of nutrient-based liquid fertilizers.",
  },
  {
    title: "Formulation Details",
    content: [
      "Active ingredient : 5 - 50%",
      "Adjuvant : 3 – 8%",
      "Solvent : Only if Required",
      "Water : Upto 100%",
    ],
  },
];

// Component to display the data
const AdjuvantForSL = () => {
  return (
    // <div className="adjuvant-for-sl">
    //   {/* <h1 className="sc-head">Adjuvant for SL (Soluble Liquid Formulations)</h1> */}
    //   {adjuvantData.map((section, index) => (
    //     <div key={index} className="sc-container">
    //       <h2 className="sc-title">{section.title}</h2>
    //       {Array.isArray(section.content) ? (
    //         <ul>
    //           {section.content.map((item, i) => (
    //             <li key={i}>{item}</li>
    //           ))}
    //         </ul>
    //       ) : (
    //         <p className="sc-para">{section.content}</p>
    //       )}
    //     </div>
    //   ))}
    // </div>
    <section className="adjuvant-for-sl">
      <div className="adjuvant-wrapper">
        {adjuvantData.map((section, index) => (
          <article key={index} className="sc-container">
            <h2 className="sc-title">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="sc-list">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="sc-para">{section.content}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default AdjuvantForSL;
