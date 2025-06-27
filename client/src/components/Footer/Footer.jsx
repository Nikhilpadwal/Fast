import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import LogoMain from "../../assets/logo fentan.png";


import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import link, { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="foooter">
      <div className="top-section">
        <div className="left-section">
          <div
            className="footer-logo"
            style={{ cursor: "pointer" }}
            onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.button === 1) {
                const newTabUrl = "/";
                window.open(newTabUrl, "_blank");
              } else {
                window.scrollTo(0, 0);
                navigate("/");
              }
            }}
          >
            <img src={LogoMain} alt="logo" className="logo-icon" />
            {/* <div className="name">
              <h2>Fenton</h2>
              <h2>
                Chemicals<span>.</span>
              </h2>
            </div> */}
          </div>

          <div className="social-icons">
            <p className="connect-text">Connect with us</p>

            <FaLinkedinIn
              onClick={(event) => {
                const url =
                  "https://www.linkedin.com/company/fentonchemicals/?originalSubdomain=in";
                if (event.ctrlKey || event.metaKey || event.button === 1) {
                  window.open(url, "_blank");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.location.href = url;
                }
              }}
              size={25}
              style={{ cursor: "pointer" }}
              className="linkedin"
            />

            <FaFacebook
              onClick={(event) => {
                const url = "https://www.facebook.com/fentonchemicals/";
                if (event.ctrlKey || event.metaKey || event.button === 1) {
                  window.open(url, "_blank");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.location.href = url;
                }
              }}
              size={25}
              style={{ cursor: "pointer" }}
              className="facebook"
            />

            <FaInstagram
              onClick={(event) => {
                const url = "https://www.instagram.com/fentonchemicals/";
                if (event.ctrlKey || event.metaKey || event.button === 1) {
                  window.open(url, "_blank");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.location.href = url;
                }
              }}
              size={25}
              style={{ cursor: "pointer" }}
              className="twitter"
            />
          </div>
        </div>

        <div className="right-section">
          <div className="tab-column-1">
            <h5>Quick Links</h5>

            <div className="tab-links">
              <p
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
                Home
              </p>
              <p
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = "/Categories";
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/Categories");
                  }
                }}
              >
                Categories
              </p>
              <p
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = "/career";
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/career");
                  }
                }}
              >
                Careers
              </p>
              <p
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = "/about";
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/about");
                  }
                }}
              >
                About
              </p>
              <p
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = "/Resourcecenter";
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/Resourcecenter");
                  }
                }}
              >
                Resource Center
              </p>
              <p
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = "/contact";
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/contact");
                  }
                }}
              >
                Contact
              </p>
            </div>
          </div>

          <div className="tab-column-2">
            <h5>Further Information</h5>

            <div className="tab-links">
              <p
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = "/terms";
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/terms");
                  }
                }}
              >
                Terms & Conditions
              </p>
              <p
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = "/privacy";
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/privacy");
                  }
                }}
              >
                Privacy Policies
              </p>
            </div>
          </div>

          <div className="tab-column-3">
            <h5>Contact Details</h5>

            <div className="details">
              <p>Akshay Jain (Director)</p>
              <p>+91-9479854613</p>
              <p>
                Plot no 15, Balaji Tulsiyana Industrial Area, Village Kumedi,
                Near Mr 10 Toll Naka, Indore, Madhya Pradesh-453555.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <p>
          © <span>Fenton Chemicals</span> All Rights Reserved 2024
        </p>

        <p>
          powered by{" "}
          <span
            onClick={(event) => {
              const url = "https://ehawkers.co.in/";
              if (event.ctrlKey || event.metaKey || event.button === 1) {
                window.open(url, "_blank");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.location.href = url;
              }
            }}
            style={{
              cursor: "pointer", // Change cursor to pointer
              transition: "transform 0.3s ease", // Smooth scaling effect
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)"; // Scale the element on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)"; // Reset scale when hover ends
            }}
          >
            E-Hawkers Marketing LLP
          </span>{" "}
        </p>
      </div>
    </footer>
  );
};
//done
export default Footer;
