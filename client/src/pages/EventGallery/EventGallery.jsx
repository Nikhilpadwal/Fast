import React from "react";
import "./EventGallery.scss";
import "../Resourcecenter/Resourcecenter.scss";
import NewEvents from "../../components/NewEvents/NewEvents";

const EventGallery = () => {
  return (
    <div className="resourcecenters">
      {/* Hero Section */}
      <div className="resource-hero-img-section">
        <div className="img-overlay">
          <div className="resource-main-hero-content-section">
            <h1 className="resource-content">Event Gallery</h1>
          </div>
        </div>
      </div>

      {/* new galler center */}
      <NewEvents />
    </div>
  );
};

export default EventGallery;
