import React, { useEffect } from "react";
import "./ContactUs.scss";

// components
import Contact from "../../components/Contact/Contact";
import FAQ from "../../components/FAQ/FAQ";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top when the component loads
  }, []);
  return (
    <div>
      <div className="contact-main">
        <div className="inner-section">
          <Contact />
          <FAQ />
        </div>

        <div className="bottom-outer">
          <div className="gradient"></div>
          <div className="right-gradient"></div>
          <div className="bottom-div">
            <div className="left-con">
              <div className="inner">
                <p className="">Collaborate with us</p>
                <h1>
                  Let’s Make <br />
                  Something <span className="tog">Together</span>
                </h1>
              </div>
            </div>

            <div className="right-con">
              <a
                href="https://wa.me/919479854613?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Let's Talk</button>
              </a>
            </div>
          </div>

          <div className="hrouter ">{/* <div className="hrline"></div> */}</div>
        </div>
      </div>
    </div>
  );
}
