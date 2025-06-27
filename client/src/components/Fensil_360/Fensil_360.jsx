import React from "react";
import "./Fensil_360.scss";
import img from  "../../assets/images/Ellipse\ 21.png"
import b from "../../assets/images/techdata/b.jpeg"
const Fensil360 = () => {
  return (
    <div className="fensil-360">
      <header className="fensil-360__header">
        <h1>SILICONE SPREADER POWDER (FENSIL 360)</h1>
        <p>
          Introducing Silicone Surfactant in Powder Form for the First Time in
          India
        </p>
      </header>

      <section className="fensil-360__about">
       <div className="d-flex intro">
        <div className="content">
        <h5 className="fw-bold mb-1">BEYOND THE CONVENTIONAL SILICONE SURFACTANTS</h5>
        <p>
          Fenton Chemicals is among the few companies to start the concept and
          use of Silicone Surfactants in India. We have expertise in
          emulsifiers, oils, and silicone-based products. With a production
          capacity of 500 Metric Tons per month for Silicone surfactant, we are
          the largest manufacturer of Silicone Super Spreader in India.
        </p>
        <p>
          Fenton Chemicals is the first company to introduce efficient Silicone
          Spreader Powder in India and worldwide. We have worked with scientists
          globally to bring new and innovative adjuvant technology for
          agriculture. After extensive research, we are proud to introduce a
          water-soluble silicon super spreader powder for the first time in
          India.
        </p>
        </div>
        <div className="img-section">
          <img src={b} alt="" />
        </div>
       </div>
      </section>

      <div className="d-flex bg-for shadow">
        <section className="fensil-360__features">
          <h2>Introducing FENSIL 360</h2>
          <ul>
            <li>
              Eco-Friendly Composition: Our Silicon Powder Surfactant is
              biodegradable, ensuring environmental sustainability.
            </li>
            <li>
              Superior Water Dispersibility: Exhibits exceptional dispersibility
              in water, ensuring efficient distribution.
            </li>
            <li>
              Versatile Application: Designed for use in solid agrochemical
              formulations like WP, GR, WDG, and SP.
            </li>
            <li>
              Enhanced Soil Performance: Improves wetting and penetration
              efficiency of granules and herbicides.
            </li>
            <li>
              Tank Mix Adjuvant: Provides up to 10x better spreading compared to
              traditional surfactants.
            </li>
            <li>
              High Dispersibility and Flow: Free-flowing powder ensures ease of
              use.
            </li>
            <li>
              Broad Compatibility: Compatible with various herbicide
              formulations for diverse agricultural needs.
            </li>
          </ul>
        </section>

        <section className="fensil-360__key-features">
          <h2>Key Features</h2>
          <ul>
            <li>
              Effortless Handling and Safety: Designed for easy and risk-free
              handling.
            </li>
            <li>
              Powerful Dispersing Capability: Works well with WP, SP, GR, CS,
              and WDG formulations.
            </li>
            <li>
              Swift Aqueous Dispersion: Rapidly disperses in water-based
              systems.
            </li>
            <li>
              Broad Compatibility: Integrates seamlessly with fertilizers,
              micronutrients, and powder formulations.
            </li>
            <li>
              Enhanced Spreading Efficiency: Lowers water surface tension for
              super spreading on foliage.
            </li>
            <li>
              Improved Pesticide Efficacy: Boosts wetting, spreading, and uptake
              for better performance.
            </li>
            <li>
              Exceptional Rain Resistance: Maintains effectiveness even after
              rainfall.
            </li>
            <li>
              Increased Chemical Uptake: Facilitates cuticular penetration and
              stomatal flooding.
            </li>
          </ul>
        </section>
      </div>

      <section className="fensil-360__soil-wetter">
        <h2>FENSIL 360 Use as a Soil Wetter</h2>
        <p>
          FENSIL 360 is a groundbreaking soil adjuvant engineered to
          revolutionize soil wetting and penetration. It addresses the
          hydrophobic qualities of soil, critical for pre-emergent herbicides
          and agrochemical treatments. By lowering the surface tension of water
          droplets, FENSIL 360 ensures uniform spreading and deeper penetration
          into the soil. This process is vital for thorough wetting, preventing
          runoff, and delivering agrochemicals effectively.
        </p>
        <p>
          It also aids in controlling soil-borne pathogens like nematodes and
          fungi, promoting healthier crops and improved yields. FENSIL 360
          represents a significant advancement in sustainable agriculture.
        </p>
        <ul>
          <li>Extended performance with "re-wettability" properties.</li>
          <li>Increases soil penetration, reducing runoff and pooling.</li>
          <li>Retains moisture in the root zone.</li>
          <li>Loosens soil structure for better effectiveness.</li>
        </ul>
      </section>

      <section className="fensil-360__properties d-flex bg-for dd shadow">
        <div className="z-3  ">
          <h2 className="">Typical Properties</h2>
          <ul className="w-100 m-0 p-0 kk">
            <li className=""> 
              <strong>Appearance:</strong> Solid White Powder
            </li>
            <li>
              <strong>Dispersibility:</strong> Quick dispersion in water
            </li>
            <li>
              <strong>Surface Tension:</strong> 20.5 @ 0.1%, mN/m
            </li>
            <li>
              <strong>Active Content:</strong> 100%
            </li>
          </ul>
        </div>

        <div className=" z-3">
          <h2>Dosage</h2>

          <ul className="kk">
            <li>Tank mix application: Approx. 5g in 15L of water</li>
            <li>WP/WDG formulations: Approx. 1–5% formulation</li>
            <li>Dispersing agent: Approx. 3–5% formulation</li>
            <li>Fertilizer/micronutrient mix: Approx. 1–5% formulation</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Fensil360;
