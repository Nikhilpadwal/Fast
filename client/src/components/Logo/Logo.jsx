import React from "react";
import "./Logo.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import LogoMain from "../../assets/logo fentan.png";



const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="logo-container"
      onClick={(event) => {
        if (event.ctrlKey || event.metaKey || event.button === 1) {
          const newTabUrl = "/";
          window.open(newTabUrl, "_blank");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/");
        }
      }}
    >
      <img src={LogoMain} alt="logo" className="logo-icon" />
      {/* <div className="name">
        <h1>Fenton</h1>
        <h1>Chemicals</h1>
      </div> */}
    </div>
  );
};

export default Logo;
