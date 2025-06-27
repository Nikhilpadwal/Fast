import React from "react";
import "./Home.scss";
import TopBanner from "../../components/Home/TopBanner/TopBanner";
import Services from "../../components/Home/Services/Services/Services";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import AboutFounder from "../../components/Home/AboutFounder/AboutFounder";
import Contact from "../../components/Contact/Contact";
import Upadates from "../../components/Home/Updates/Updates";
import WelcomeSection from "../../components/Home/WelcomeSection/WelcomeSection";
import TellUs from "../../components/Home/TellUs/TellUs";
import GlobalPresence from "../../components/Home/GlobalPresence/GlobalPresence";

const Home = () => {
  return (
    <div className="home">
      <TopBanner />

      <WelcomeSection />

      <div className="service-container">
        <Services />
      </div>

      <div className="tell-us-container">
        <TellUs />
      </div>

      <AboutUs />

      <AboutFounder />

      <GlobalPresence />

      <Upadates />

      <Contact />
    </div>
  );
};

export default Home;
