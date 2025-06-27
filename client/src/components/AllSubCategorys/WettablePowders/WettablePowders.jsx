import React from "react";
import "./WettablePowders.scss";

const wettablePowderData = [
  {
    // title: "What are Wettable Powders (WP)?",
    // description:
    //   "Wettable Powders (WP) are dry, finely ground pesticide formulations that resemble dust but need to be mixed with water before application. They contain 5%–95% active ingredients, usually 50% or more, and do not dissolve in water but remain suspended when agitated.",
    sections: [
      {
        title: "Key Features of Wettable Powders",
        points: [
          "Highly Effective: WP formulations are widely used for pest control and work well with most spray equipment that provides constant agitation.",
          "Excellent Residual Activity: The pesticide remains on surfaces like concrete, plaster, and untreated wood, ensuring long-lasting effects.",
          "Flexible Application: Some products allow for both dust and WP applications, giving applicators more choices.",
        ],
      },
      {
        title: "Advantages of Wettable Powders",
        points: [
          " Easy to store, transport, and handle",
          " Safer for plants and animals compared to ECs (Emulsifiable Concentrates)",
          " Accurate dosing: Easily measured and mixed",
          " Lower skin and eye absorption risk than liquid pesticide formulations",
        ],
      },
      {
        title: "Disadvantages of Wettable Powders",
        points: [
          " Inhalation risk: Fine particles pose a hazard during mixing",
          " Requires continuous agitation to prevent settling in the spray tank",
          " Abrasive to spray equipment: Can wear out pumps and nozzles quickly",
          " Difficult to mix in very hard or alkaline water",
          " May clog nozzles and leave visible residues on surfaces",
        ],
      },
    ],
  },
];
const typicalformula = [
  {
    title: "Typical Formula",
    formula: [
      "Active Ingredient: 50-900 gms/kg",
      "Surfactants: 30-80 gms/kg",
      "Inert Filler: Quantity adjusted to 1kg",
    ],
  },
];

const WettablePowders = () => {
  const data = wettablePowderData[0]; // Fixing the issue

  return (
    <>
      <div className="wettable-powder-container">
        {/* <h2 className="wp-head">{data.title}</h2>
        <p className="wp-para">{data.description}</p> */}
        {data.sections.map((section, index) => (
          <div key={index} className="wp-section">
            <h3 className="wp-head">{section.title}</h3>
            {section.points && (
              <ul>
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            {section.formula && (
              <ul className="formula">
                {section.formula.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/*  */}
      </div>
      <div className="formula shadow">
        <h3 className="wp-head">Typical Formula</h3>
        {typicalformula.map((formula, index) => (
          <ul className="mt-2" key={index}>
            {formula.formula.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
};

export default WettablePowders;
