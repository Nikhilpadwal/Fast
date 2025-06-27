import React from "react";
import "./PrivacyPage.scss";

const PrivacyPage = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        At Fenton Chemicals, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your data.
      </p>
      <ol>
        <li>
          <strong>Information We Collect:</strong> We may collect personal
          details like name, email, and company information during interactions.
        </li>
        <li>
          <strong>How We Use Your Information:</strong> To process orders,
          improve services, and send promotional content (with consent).
        </li>
        <li>
          <strong>Data Protection:</strong> Your information is safeguarded, and
          we do not share it with third parties without consent.
        </li>
        <li>
          <strong>Cookies:</strong> Our website uses cookies to enhance user
          experience. You can disable them via browser settings.
        </li>
        <li>
          <strong>Your Rights:</strong> You can access, modify, or delete your
          personal data by contacting us.
        </li>
      </ol>
    </div>
  );
};

export default PrivacyPage;
