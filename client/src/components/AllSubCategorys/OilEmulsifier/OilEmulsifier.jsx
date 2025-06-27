import React from "react";
import "./OilEmulsifier.scss";

// Data stored in an array of objects
const oilEmulsifierData = [
  {
    title: " ",
    content: ""
      // "An oil emulsifier is a chemical agent that helps in mixing oil and water, forming a stable emulsion. It works by reducing the surface tension between two immiscible liquids, preventing separation and enhancing solubility. Oil emulsifiers are widely used in industries like textiles, paints, lubricants, agrochemicals, and cleaning formulations.",
  },
  {
    title: "Key Benefits & Features",
    content: [
      "Superior Emulsification – Effectively blends oils with water, ensuring stability.",
      "Enhanced Solubility – Reduces the need for excessive mechanical mixing.",
      "Eco-Friendly & Biodegradable Options – Available in sustainable formulations.",
      "Versatile Applications – Suitable for industrial, agricultural, and cleaning uses.",
      "Thermal & Chemical Stability – Works efficiently under varied temperature and pH conditions.",
    ],
  },
  {
    title: "Applications of Oil Emulsifiers",
    content: [
      "Textile Industry – Used in dyeing and finishing processes for uniform dispersion of oils.",
      "Paints & Coatings – Ensures smooth blending of oil-based paints with water.",
      "Lubricants & Metalworking Fluids – Helps in making stable cutting oil formulation.",
      "Agrochemicals – Enhances the effectiveness of pesticides and herbicides.",
      "Cleaning Formulations – Used in detergents and degreasers for breaking down grease and oil.",
    ],
  },
];

// Component to display the data
const OilEmulsifier = () => {
  return (
    <div className="oil-emulsifier">
      {/* <h1 className="oil-head">Oil Emulsifier Information</h1> */}
      {oilEmulsifierData.map((section, index) => (
        <div key={index} className="oil-con">
          <h2 className="oil-title">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul>
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="oil-para">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default OilEmulsifier;
