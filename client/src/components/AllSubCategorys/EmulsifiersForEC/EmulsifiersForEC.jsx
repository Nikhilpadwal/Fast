import React from "react";
import "./EmulsifiersForEC.scss";

// Data stored in an array of objects
const emulsifierData = [
 
  {
    title: "Why Choose the Right Emulsifier?",
    content: [
      "Stable Formulation – Prevents phase separation and ensures longevity.",
      "Improved Solubility – Enhances the dispersibility of active ingredients.",
      "Effective Performance – Ensures consistent application and efficacy.",
      "Enhanced Stability – Resistant to temperature variations and external conditions.",
    ],
  },
  {
    title: "Benefits of Our Emulsifiers",
    content: [
      "Superior Stability – No phase separation or sedimentation.",
      "Optimized Ratios – Perfect balance of anionic and non-ionic emulsifiers.",
      "High Performance – Ensures efficient application and effectiveness.",
      "Customizable Solutions – Tailored emulsifier blends based on formulation needs.",
    ],
  },
];

// Component to display the data
const EmulsifiersForEC = () => {
  return (
    <div className="emulsifiers-for-ec">
      {/* <h1 className="EC">Emulsifiers for EC</h1> */}
      {emulsifierData.map((section, index) => (
        <div key={index} className="EC-container">
          <h2 className="EC-title">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="ul-con">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="ec-para">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmulsifiersForEC;
