import React, { useEffect, useRef } from "react";
import "./AboutUs.scss";
import arpit from "../../assets/images/Teams/arpit.jpg";
import delip from "../../assets/images/Teams/delip.jpg";
import akshay from "../../assets/images/Teams/akshay.jpg";

// images
import icon1 from "../../assets/images/aboutus/icon1.webp";
import icon2 from "../../assets/images/aboutus/icon2.webp";
import icon3 from "../../assets/images/aboutus/icon3.webp";
import icon4 from "../../assets/images/aboutus/icon4.webp";

import img1 from "../../assets/images/aboutus/img1.webp";
import img2 from "../../assets/images/aboutus/img2.webp";
import img3 from "../../assets/images/aboutus/img3.webp";
import img4 from "../../assets/images/aboutus/img4.webp";

import bgimg from "../../assets/images/aboutus/imagesbg.jpeg";
import plant1 from "../../assets/images/aboutus/field1.webp";
import plant2 from "../../assets/images/aboutus/plant.webp";

import house from "../../assets/images/aboutus/factory.webp";

// icon
import { IoLogoLinkedin } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";

import { FaRegCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const team = [
  { image: "", name: "John Doe", position: "CEO" },
  { image: "", name: "Jane Smith", position: "CTO" },
  { image: "", name: "Mike Johnson", position: "Developer" },
  { image: "", name: "Sarah Williams", position: "Designer" },
  { image: "", name: "David Brown", position: "Project Manager" },
];

function AboutUs() {
  const scrollToSection = () => {
    console.log("Hello This One");
    const element = document.getElementById("classPast");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top when the component loads
  }, []);

  return (
    <div className="AboutUs">
      {/* first section */}
      <div className="about-inner">
        <h4 className="journey">OUR JOURNEY AND MILESTONES</h4>
        <h1 className="infopara">
          From Central India to Global Leadership, <br />
          <span className="span">Revolutionizing the Chemical Industry</span>
        </h1>

        <p>
          Our relentless pursuit of innovation, ethical practices, and
          unparalleled customer satisfaction has established us as industry
          leaders. With decades of expertise, advanced technology, and strategic
          partnerships, we deliver comprehensive chemical solutions to meet
          &nbsp; the evolving needs of businesses worldwide.
        </p>

        <div className="button">
          <button onClick={scrollToSection}>Jump to Present Day</button>
        </div>
      </div>

      {/* second section.. */}
      <div className="second-section">
        <div className="inner-section">
          <div className="left-section">
            <div className="info-1 info-para1">
              <h1 className="yeartext">1998</h1>
              <p className="heading">
                Foundation of <br />
                <span>DK Corporation</span>
              </p>
            </div>

            <div className="info-1">
              <p className="infoparatext">
                Arpit Jain, Dilip Jain's son and a Chemical Engineering graduate
                from IIT BHU, founded Fenton Chemicals in January. Fenton
                Chemicals, a specialty chemicals manufacturing unit in Indore,
                focuses on higher production output and a greater range of
                diversified products.
              </p>
              <p className="mt-3 infoparatext">
                Fenton Chemicals developed a wide distribution network and is
                supported by a team of highly qualified technical researchers
                driving continuous innovation.
              </p>

              <div className="sideimg">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="info-1 info-para1 y2019">
              <h1 className="yeartext">2019</h1>
              <p className="heading">
                Launch of Fenrich <br />
                <span>Silicones and Surfactants</span>
              </p>
            </div>

            <div className="info-1 info-para2 y2019">
              <p className="infoparatext">
                The companies strive to exhibit fundamental qualities such as
                integrity, ethics, unparalleled customer satisfaction,
                personalized solutions, and a commitment to earning customer
                trust and building lasting relationships.
              </p>
              <div className="sideimg" style={{ top: "14%" }}>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>

          <div className="center-section">
            <div className="line">
              <div className="dot">
                <div className="center-inner-circle"></div>{" "}
                <img src={icon1} alt="" />
              </div>

              <div
                className="center-line"
                style={{ background: "#0085D9" }}
              ></div>

              <div className="dot">
                <div className="center-inner-circle"></div>
                <img src={icon2} alt="" />
              </div>

              <div className="center-line"></div>

              <div className="dot">
                <div className="center-inner-circle"></div>
                <img src={icon3} alt="" />
              </div>
              <div className="center-line"></div>
              <div className="dot">
                <div className="center-inner-circle"></div>
                <img src={icon4} alt="" />
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="info-2">
              <p className="infoparatext">
                Dilip Jain, a visionary entrepreneur with nearly three decades
                of expertise in specialty chemicals, founded DK Corporation,
                specializing in chemical trading
              </p>
              <p className="mt-3 infoparatext">
                Dilip Jain earned his MSc in Organic Chemistry from the
                University of Pune and started working at a chemical
                manufacturing unit. He noticed a scarcity of raw material
                availability in Central India, which motivated him to start DK
                Corporation.
              </p>
              <div className="sideimg">
                <img src={img3} alt="" />
              </div>
            </div>

            <div className="info-2 info-two">
              <h1 className="yeartext ">2015</h1>
              <p className="heading mb-4">
                Establishment of
                <br />
                <span>Fenton Chemicals</span>
              </p>
            </div>

            <div className="info-2 info-preliminary mt-5" id="classPast">
              <div className="img">
                <img src={img4} alt="" />
              </div>
            </div>

            <div className="info-2 info-two pday">
              <h1 className="yeartext mt-3">Present Day</h1>
              <p className="heading">
                Renowned Group in <br /> the Industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second section for mobile.. */}
      <div className="second-section-for-mobile">
        <div className="inner-section">
          <div className="left-section">
            <div className="info-1 info-para1">
              <div className="lef">
                <h1 className="yeartext">1988</h1>
                <p className="heading">
                  Foundation of <br />
                  <span>DK Corporation</span>
                </p>
              </div>

              <div className="dot">
                <div className="center-inner-circle"></div>{" "}
                <img src={icon1} alt="" />
              </div>
            </div>

            <div className="infoo">
              <p className="infoparatext">
                Dilip Jain, a visionary entrepreneur with nearly three decades
                of expertise in specialty chemicals, founded DK Corporation,
                specializing in chemical trading
              </p>
              <p className="mt-2 infoparatext">
                Dilip Jain earned his MSc in Organic Chemistry from the
                University of Pune and started working at a chemical
                manufacturing unit. He noticed a scarcity of raw material
                availability in Central India, which motivated him to start DK
                Corporation.
              </p>
              <div className="sideimg">
                <img src={img3} alt="" />
              </div>
            </div>

            {/* 2015 */}
            <div className="info-1 mt-5">
              <div className="lef">
                <h1 className="yeartext ">2014</h1>
                <p className="heading ">
                  Establishment of
                  <br />
                  <span>Fenton Chemicals</span>
                </p>
              </div>
              <div className="dot">
                <div className="center-inner-circle"></div>
                <img src={icon2} alt="" />
              </div>
            </div>

            <div className="infoo mt-2">
              <p className="infoparatext">
                Arpit Jain, Dilip Jain's son and a Chemical Engineering graduate
                from IIT BHU, founded Fenton Chemicals in January. Fenton
                Chemicals, a specialty chemicals manufacturing unit in Indore,
                focuses on higher production output and a greater range of
                diversified products.
              </p>
              <p className="mt-2 infoparatext">
                Fenton Chemicals developed a wide distribution network and is
                supported by a team of highly qualified technical researchers
                driving continuous innovation.
              </p>

              <div className="sideimg">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="info-1  mt-5">
              <div className="lef">
                <h1 className="yeartext">2019</h1>
                <p className="heading">
                  Launch of Fenrich <br />
                  <span>Silicones and Surfactants</span>
                </p>
              </div>
              <div className="dot">
                <div className="center-inner-circle"></div>
                <img src={icon3} alt="" />
              </div>
            </div>

            <div className="infoo">
              <div className="sideimg">
                <img src={img4} alt="" />
              </div>
            </div>

            <div className="info-1  mt-5">
              <div className="lef">
                <h1 className="yeartext">Present Day</h1>
                <p className="heading">
                  Renowned Group in <br /> <span>the Industry</span>
                </p>
              </div>
              <div className="dot">
                <div className="center-inner-circle"></div>
                <img src={icon4} alt="" />
              </div>
            </div>
            <div className="infoo mt-2" id="classPast">
              <p className="infoparatext">
                The companies strive to exhibit fundamental qualities such as
                integrity, ethics, unparalleled customer satisfaction,
                personalized solutions, and a commitment to earning customer
                trust and building lasting relationships.
              </p>
              <div className="sideimg" style={{ top: "14%" }}>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div
        className="section-3"
        style={{
          backgroundImage: `linear-gradient(250.78deg, #0085D9 2.75%, #004773 100.17%), url(${bgimg})`,
        }}
      >
        <div className="left-content">
          <div className="left-content-outer">
            <div className="text-sec">
              <h4 className="heading">VISION & MISSION</h4>
              <p className="subheading">
                Catalyzing Innovation & <br />
                Creating Sustainable Chemical Solutions for a Better Tomorrow
              </p>
            </div>

            <div className="image-section">
              <img src={plant2} alt="" className="img1" />
              <img src={plant1} alt="" className="img2" />
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="box">
            <div className="box-heading">
              <h2>Our</h2>
              <div className="button">Vision</div>
            </div>
            <div className="paraText mt-3">
              <p>
                <div className="icon">
                  {" "}
                  <FaRegCircleCheck size={14} />
                </div>{" "}
                Fenton Chemicals is committed to being India’s premier
                Speciality Chemicals Company.
              </p>
              <p>
                <div className="icon">
                  {" "}
                  <FaRegCircleCheck size={14} />
                </div>{" "}
                To that end, we shall continuously achieve superior financial
                and operating results while adhering to the highest standards of
                business conduct .
              </p>
            </div>
          </div>

          <div className="box" style={{ height: "270px" }}>
            <div className="box-heading">
              <h2>Our</h2>
              <div className="button">Mission</div>
            </div>
            <div className="paraText mt-3">
              <p>
                {" "}
                <div className="icon">
                  {" "}
                  <FaRegCircleCheck size={14} />
                </div>{" "}
                Our foundation is built on unwavering perseverance in applying
                fundamentals of Chemical Engineering.
              </p>
              <p>
                <div className="icon">
                  {" "}
                  <FaRegCircleCheck size={14} />
                </div>{" "}
                We deliver innovative and path-breaking industrial solutions.
              </p>
              <p>
                <div className="icon">
                  {" "}
                  <FaRegCircleCheck size={14} />
                </div>{" "}
                We strive to exhibit the fundamental qualities that drive
                successful business relations across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4  */}
      <div className="TeamSection">
        <div className="heading">
          <h2>TEAMS</h2>
          <h3>
            Our <span>Leadership</span>
          </h3>
          <p>
            We are among the leading manufacturers and suppliers of this domain,
            broadly engrossed in offering a wide range of Industrial Chemicals.
            Offered chemicals are highly demanded among the customers for their
            accurate formulation and longer shelf life.
          </p>
        </div>
        <div className="teams-list">
          {/* {team.map((team) => ( */}

          <div className="team">
            <div className="memImg">
              <img src={delip} alt="" />
              <div className="memInfo">
                <div>
                  <h3>Dilip Jain</h3>
                  <p>Founder</p>
                </div>
                <div className="icon">
                  {/* <a href="" target="_blank">
                  <IoLogoLinkedin size={20} color={"#131313A6"} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="memImg">
              <img src={arpit} alt="" />
              <div className="memInfo">
                <div>
                  <h3>Arpit Jain</h3>
                  <p>Co-Founder</p>
                </div>
                <div className="icon">
                  <a
                    href="https://www.linkedin.com/in/arpit-jain-5a301b20/"
                    target="_blank"
                  >
                    <IoLogoLinkedin size={20} color={"#131313A6"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="memImg">
              <img src={akshay} alt="" />
              <div className="memInfo">
                <div>
                  <h3>Akshay Jain</h3>
                  <p>Co-Founder</p>
                </div>
                <div className="icon">
                  <a
                    href="https://www.linkedin.com/in/akshay-jain-19010a156/"
                    target="_blank"
                  >
                    <IoLogoLinkedin size={20} color={"#131313A6"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="team">
            <div className="memImg">
              <img
                src="https://img.freepik.com/premium-photo/bearded-man-with-glasses-dressed-blue-checkered-blazer_1272475-14279.jpg?semt=ais_hybrid"
                alt=""
              />
              <div className="memInfo">
                <div>
                  <h3>lorem</h3>
                  <p>team leader</p>
                </div>
                <div className="icon">
                  <IoLogoLinkedin size={20} color={"#131313A6"} />
                </div>
              </div>
            </div>
          </div>

          <div className="team">
            <div className="memImg">
              <img
                src="https://img.freepik.com/premium-photo/bearded-man-with-glasses-dressed-blue-checkered-blazer_1272475-14279.jpg?semt=ais_hybrid"
                alt=""
              />
              <div className="memInfo">
                <div>
                  <h3>lorem</h3>
                  <p>team leader</p>
                </div>
                <div className="icon">
                  <IoLogoLinkedin size={20} color={"#131313A6"} />
                </div>
              </div>
            </div>
          </div> */}

          <div
            className="team gradient"
            onClick={(event) => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (event.ctrlKey || event.metaKey || event.button === 1) {
                const newTabUrl = "/career";
                window.open(newTabUrl, "_blank");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/career");
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <h1>
              You can be <br /> the part of our <br /> team{" "}
              <IoArrowBackSharp className="icon" />
            </h1>
          </div>
          {/* ))} */}
        </div>
      </div>

      {/* section 5  */}
      <div className="buttom-section">
        <div className="left-sec">
          <div className="imgdiv">
            <img src={house} alt="" />
            <div className="bgcolor"></div>
          </div>
        </div>

        <div className="right-sec">
          <div className="inner-section">
            <h2>OUR INFRASTRUCTURE</h2>
            <h1>
              State-of-the-Art <br />
              <span>Facilities</span>
            </h1>

            <p>
              {" "}
              <b> Location Type: </b>Semi-Urban, offering the perfect balance
              between accessibility and tranquility, ideal for operational
              efficiency.
              <br />
              <b> Building Infrastructure: </b> Permanent and robust
              construction designed to accommodate long-term business needs.{" "}
              <br />
              <b>Size of Premises:</b> Spanning 50,000 square feet, providing
              ample space for diverse operations and future expansion.
              <br />
              <b>Pace Around: </b>A welcoming front porch that enhances the
              aesthetic appeal while offering functional outdoor space for
              informal activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
