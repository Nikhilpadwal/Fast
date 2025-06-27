import React from "react";
import "./SuspensionConcentrates.scss";

const suspensionConcentratesData = [
  {
    introduction: {
      // title: "",
      // // "What are Suspension Concentrates (SC)?",
      // description: "",
      // 'Suspension Concentrates, also known as "flowables," are highly effective liquid formulations used in agricultural applications. They consist of finely milled solid active ingredients dispersed in water, ensuring high stability and ease of use.',
    },
    benefits: {
      title: "Key Benefits of SC Formulations",
      points: [
        "No Dust: Reduces inhalation risks compared to powder formulations.",
        "Non-Flammable & Non-Toxic: Safe to handle without solvent-related hazards.",
        "Enhanced Efficiency: Smaller particle size ensures better coverage and performance.",
        "Low Packaging Volume: Requires less storage space and is easy to transport.",
        "Long-Term Stability: Prevents sedimentation, ensuring consistent performance.",
        "Easily Pourable & Dispersible: Provides smooth application in agricultural settings.",
      ],
    },
    roleOfSurfactants: {
      title: "Role of Surfactants in SC Formulations",
      description:
        "Surfactants are essential for stabilizing the formulation and ensuring proper dispersion. They aid in:",
      points: [
        "Wetting of solid particles.",
        "Enhancing dispersibility in the liquid phase.",
        "Preventing particle aggregation.",
        "Ensuring stability in diluted applications.",
      ],
    },
    composition: {
      title: "Composition of SC Formulation",
      list: [
        " Active Ingredient: 50-800 g/L",
        "Wetting Agents: 5-15 g/L",
        "Dispersing Agents: 20-50 g/L",
        "Antifreeze: 20-80 g/L (e.g., Monopropylene Glycol)",
        "Antifoam & Stabilizers: 1-5 g/L",
        "Thickener: 1-4 g/L (e.g., Xanthan Gum, Bentonite)",
        "Preservative: Protects against bacterial contamination.",
        "Water: Up to 1000 mL",
      ],
    },
    keyAdditives: {
      title: "Selection of Key Additives",
      points: [
        "Wetting Agents: Improve solid particle wetting of hydrophobic actives.",
        "Dispersing Agents: Ensure uniform dispersion of solid active particles.",
        "Antifreeze Agents: Prevent freezing and ensure usability in varied climates.",
        "Thickeners: Maintain suspension integrity and prevent settlement.",
        "Antifoams: Reduce foam formation during mixing and field application.",
        "Preservatives: Prevent microbial contamination and extend shelf life.",
      ],
    },
  },
  // Additional objects can be added here
];

const SuspensionConcentrates = () => {
  return (
    <div className="suspension-container">
      {suspensionConcentratesData.map((data, index) => (
        <div key={index} className="sc-section">
          {/* Introduction */}

          {/* Key Benefits */}
          <div className="sc-inner">
            <h3 className="sc-head">{data.benefits.title}</h3>
            <ul>
              {data.benefits.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Role of Surfactants */}
          <div className="sc-inner">
            <h3 className="sc-head">{data.roleOfSurfactants.title}</h3>
            <p className="sc-para">{data.roleOfSurfactants.description}</p>
            <ul>
              {data.roleOfSurfactants.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Composition */}
          <div className="sc-inner">
            <h3 className="sc-head">{data.composition.title}</h3>
            <ul>
              {data.composition.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Selection of Key Additives */}
          <div className="sc-inner">
            <h3 className="sc-head">{data.keyAdditives.title}</h3>
            <ul>
              {data.keyAdditives.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuspensionConcentrates;
