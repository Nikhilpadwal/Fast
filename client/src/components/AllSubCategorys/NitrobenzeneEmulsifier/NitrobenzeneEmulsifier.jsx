import React from "react";
import "./NitrobenzeneEmulsifier.scss";

const nitrobenzeneData = [
  {
    title: "Features & Benefits",
    points: [
      "Enhances the water solubility of nitrobenzene",
      "Provides excellent dispersion and stability",
      "Compatible with various agrochemical formulations",
      "Improves plant metabolism and growth stimulation",
      "Eco-friendly and biodegradable options available",
    ],
  },
  {
    title: "Applications of Nitrobenzene Emulsifier",
    points: [
      "Agriculture: Used in plant growth promoters to enhance flowering and fruiting.",
      "Agrochemicals: Helps in the formulation of pesticide and fertilizer blends.",
      "Chemical Industry: Used in industrial emulsions and solvent-based formulations.",
    ],
  },
  {
    title: "How Nitrobenzene Emulsifier Works?",
    description:
      "Nitrobenzene itself is insoluble in water, but with the help of an emulsifier, it forms a stable dispersion, ensuring even application and maximum absorption in agriculture. This leads to improved efficiency and performance in the intended use case.",
  },
];

const NitrobenzeneEmulsifier = () => {
  return (
    <div className="nitrobenzene-container">
      {nitrobenzeneData.map((section, index) => (
        <div key={index} className="nb-section">
          <h3 className="ne-head">{section.title}</h3>
          {section.description && <p className="">{section.description}</p>}
          {section.points && (
            <ul>
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default NitrobenzeneEmulsifier;
