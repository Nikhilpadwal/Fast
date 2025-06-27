import React from "react";
import "./Terms_Conditions.scss";

const Terms_Conditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to Fenton Chemicals! These Terms & Conditions outline the rules
        and regulations for the use of our website and services.
      </p>
      <ol>
        <li>
          <strong>Acceptance of Terms:</strong> By accessing our website or
          purchasing our products, you agree to comply with and be bound by
          these Terms & Conditions.
        </li>
        <li>
          <strong>Product Information:</strong> All product descriptions,
          specifications, and pricing are provided for informational purposes.
          Accuracy is ensured but not guaranteed.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All content on this website,
          including text, images, and branding, is the property of Fenton
          Chemicals.
        </li>
        <li>
          <strong>Limitation of Liability:</strong> Fenton Chemicals is not
          liable for damages arising from the use of our products or services.
        </li>
        <li>
          <strong>Modifications to Terms:</strong> We reserve the right to
          update these Terms & Conditions at any time.
        </li>
      </ol>
    </div>
  );
};

export default Terms_Conditions;
