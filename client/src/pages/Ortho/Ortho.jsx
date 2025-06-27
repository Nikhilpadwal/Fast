import React from "react";
import "./Ortho.scss";
import img from "../../assets/images/ortho/img.jpeg";
import imgproduct from "../../assets/images/ortho/Designer (1).jpeg";

const Ortho = () => {
  const orthoproductdata = [
    {
      topic: "<span>Orthosilicic Acid</span> 2% WSL",
      image: imgproduct,
      introduction:
        "Fenton Chemicals is pleased to introduce its new innovative product based on highly Stabilized Orthosilicic Acid Liquid at 2% Concentration. Silicon is an essential nutrient for plants and is present in soils, minerals, and ocean water. But this silicon is poorly absorbed and not available for plants uptake. Silicon in the form of orthosilicic acid is the highest bioavailable form of silicon to plants.",
      benefits: [
        "Stimulates photosynthesis process",
        "Increases uptake of primary and secondary nutrients which results in enhanced crop yields",
        "Reduces water consumption",
        "Enhances resistance to conditions like drought",
        "Improves resistance to bacteria, insects, and fungal diseases",
        "Improves Color, Size, Number, and Quality of Fruits",
        "Increases Plants Growth",
        "Enhances mobilization of nutrients",
        "Reduces consumption of Fertilizers and Pesticides",
        "Increases Grain and Straw yield along with Silicon Content",
        "Increases Leaf Area and Chlorophyll Content",
        "Increases resistance of Plants towards Biotic and Abiotic Stresses",
        "Excellent results in most crops like Rice, Sugarcane, Papaya, Apples, Grapes, Onion, Potatoes, Chilli, Wheat, Sunflower, Corn, tomatoes",
      ],
      specifications: [
        {
          parameter: "Orthosilicic Acid (Si(OH)4) percent by weight, minimum",
          parameters: "2.0",
          result: "2.5%",
        },
        {
          parameter:
            "Plant available silicon equivalent, percent by weight minimum",
          parameters: "0.6% min",
          result: "0.8% min",
        },
        {
          parameter: "pH (1% solution in distilled water @ 20 Deg C)",
          parameters: "17-22",
          result: "1.7-2.2",
        },
      ],
      dosageInstructions: [
        "Add 3 to 6 ml Fenosil per litre of water",
        "Can be sprayed along with other pesticides/insecticides",
        "Wetting Agent/Surfactants should be added along with Fenosil preferably",
        "Spray should be done on both sides of leaves",
        "Spraying should be done every 10-14 days interval for 4-6 weeks",
        "For short duration crops - 2 sprays are sufficient",
        "Spraying should be done only when new leaves are formed or the plants are very young",
        "For trees like mango, grapes - 4 sprays should be done after pruning",
        "For sugarcane - 4 ml per litre water at 15 days interval for six months",
        "For rice - 4 ml per litre of water at 15 days interval for 2 months",
      ],
    },
  ];

  return (
    <div className="ortho-container">
      <div className="categories-inner">
        <h1 className="onthhead">
          {/* <span>Orthosilicic Acid</span> 2% Liquid (Fenosil) */}
        </h1>
        <div className="bg-inner"></div>
      </div>
      {orthoproductdata.map((item, index) => (
        <div className="all-section-container" key={index}>
          <h1
            className="topic mb-5"
            dangerouslySetInnerHTML={{ __html: item.topic }}
          ></h1>
          <div className="section  m-0">
            <div className="intro-part">
              <div className="img-round">
                <img src={item.image} alt="" />
              </div>
              <div className="int-div">
                <h2 className="mb-2 int-head text-start fw-bolt">
                  Introduction
                </h2>

                <p className="techpara img-para">{item.introduction}</p>
              </div>
            </div>
          </div>

          <div className="section details">
            <div className="bg-white shadow">
              <div className="title bg-white">
                ORTHOSILICIC ACID HAS THE FOLLOWING BENEFITS TO PLANTS
              </div>
              <ul className="list">
                {item?.benefits?.map((benefit, index) => (
                  <li key={index}> {benefit}.</li>
                ))}
              </ul>
            </div>
            <img src={img} alt="" className="tractor shadow" />
          </div>

          <div className="section ">
            <div className="title">Specifications</div>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Parameter</th>
                  <th>Parameters</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {item?.specifications.map((spec, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{spec.parameter}</td>
                    <td>{spec.parameters}</td>
                    <td>{spec.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section details">
            <div className="bg-white" style={{ borderRadius: "25px" }}>
              <div className="title">DOSAGE / INSTRUCTIONS FOR USE</div>
              <ul className="list">
                {item?.dosageInstructions.map((instruction, index) => (
                  <li key={index}> {instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ortho;
