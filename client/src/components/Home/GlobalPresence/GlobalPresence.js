import React from "react";
import "./GlobalPresence.scss";

const GlobalPresence = () => {
  return (
    <section className="global-presence">
      <div className="header-container">
        <div className="heading-container">
          <h1 className="heading">
            Our <span className="global-text">Global </span>
            <span className="presence-text">Presence</span>
          </h1>
        </div>

        <p className="para-text">
          We are exporting our products to more than 11 countries around the
          world.
        </p>
      </div>
    </section>
  );
};

export default GlobalPresence;
