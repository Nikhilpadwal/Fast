import React from "react";
import "./WelcomeSection.scss";
import welcome from "../../../assets/images/home/welcome.webp";

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="header-container">
        <div className="heading-container padding-horizontal">
          <h3 className="heading">Welcome To</h3>
        </div>

        <div className="subheading-container padding-horizontal">
          <h1 className="subheading primary-gradient-background">
            Fenton{" "}
            <span className="span-text tertiary-gradient-background">
              Chemicals
            </span>
          </h1>
        </div>

        <div className="para padding-horizontal">
          <p className="para-text">
            Fenton Chemicals is committed to being India's premier Speciality
            Chemicals Company. To that end, we shall continuously achieve
            superior financial and operating results while adhering to the
            highest standards of business conduct.
          </p>
        </div>
      </div>

      <div className="welcome-main-container">
        <div className="left-container">
          <div className="image-container">
            <img src={welcome} alt="welcome-image" className="welcome-image" />
          </div>
        </div>

        <div className="right-container">
          <div className="right-heading-container">
            <h3 className="subheading">Fenton is the Leading</h3>
            <h3 className="subheading">
              Manufacturer of{" "}
              <span className="span-text">Agro Emulsifiers</span>.
            </h3>
          </div>

          <div className="separator-line"></div>

          <div className="right-para-container">
            <p className="para-text">
              Established in 2014, Fenton Chemicals is a leading manufacturer
              and exporter based in Indore, specializing in premium-quality
              industrial emulsifiers, essential oils, paint additives, home
              cleaning chemicals, and super silicone spreaders. Renowned for our
              commitment to quality and durability, we serve customers
              worldwide, offering products at competitive prices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
