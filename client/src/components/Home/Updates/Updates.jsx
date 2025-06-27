import React, { useEffect, useState } from "react";
import "./Updates.scss";
import { FaArrowRight } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
//done
import { useNavigate } from "react-router-dom";
import imageArray from "../../../constants/Gallery";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Updates = () => {
  const [topBlogLists, setTopBlogLists] = useState([]);

  const getAllBlog = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllBlogs`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response?.data);
        if (response?.data?.status == true) {
          setTopBlogLists(response?.data?.data);
        }
        if (response?.data?.status == false) {
          toast.error(response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message, {
          position: "bottom-right",
          autoClose: 4000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      });
  };

  const navigate = useNavigate();

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <section className="updates">
      <div className="heading-container">
        <div className="heading-left-section">
          <h4 className="heading">UPDATES</h4>

          <div className="subheading-section">
            <h1 className="subheading">Our Latest </h1>

            <h1 className="subheading">
              <span className="span-text primary-gradient-background">
                Blog & Event
              </span>{" "}
              Posts
            </h1>
          </div>
        </div>

        <div className="view-all-section">
          <div
            className="view-all"
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
            <p>View All</p>
            <FaArrowRight className="arrow" />
          </div>
        </div>
      </div>

      <div className="blogs-container">
        <h4 className="section-heading">Blogs</h4>

        <div className="main-blog-container">
          <div className="left-blogs-container">
            {topBlogLists.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="left-single-blog"
                // onClick={() => {
                //   navigate("/Singleblog", { state: { blog: item } }); // Pass data using state
                //   window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
                // }}
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = `/Blog/${item.title.replace(
                      /\s+/g,
                      "_"
                    )}`;
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/Blog/${item.title.replace(/\s+/g, "_")}`);
                  }
                }}
              >
                <div className="left-blog-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="left-blog-image"
                  />
                </div>

                <div className="left-blog-details-container">
                  <div className="left-blog-title-container">
                    <h4 className="left-blog-title">{item.title}</h4>
                  </div>

                  <div className="description-container">
                    <div className="left-blog-description-container">
                      <p className="left-blog-description">
                        {item.description}
                      </p>
                    </div>

                    <div class="separator-line"></div>

                    <div className="bottom-container">
                      <div className="date-container">
                        <LuCalendarDays className="views" />
                        <p className="date">
                          {new Date(item.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>

                      {/* <div className="views-container">
                        <IoEyeOutline className="views" />
                        <p className="views">{`${item.totalViews} views`}</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="right-blogs-container">
            {topBlogLists.slice(2).map((item, index) => (
              <div
                key={index}
                className="right-single-blog"
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    const newTabUrl = `/Blog/${item.title.replace(
                      /\s+/g,
                      "_"
                    )}`;
                    window.open(newTabUrl, "_blank");
                  } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate(`/Blog/${item.title.replace(/\s+/g, "_")}`);
                  }
                }}
              >
                <div className="right-blog-right-container">
                  <div className="right-blog-image-container">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="right-blog-image"
                    />
                  </div>
                </div>

                <div className="right-blog-details-container">
                  <div className="right-blog-title-container">
                    <h5 className="right-blog-title">{item.title}</h5>
                  </div>

                  <div className="date-container">
                    <LuCalendarDays className="date" />
                    <p className="date">
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="events-container">
        <h4 className="section-heading">Our Event Gallery</h4>

        <div class="all-events-container-grid">
          <div
            class="image image1"
            onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.button === 1) {
                const newTabUrl = "/Event-Gallery";
                window.open(newTabUrl, "_blank");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/Event-Gallery");
              }
            }}
          >
            <img src={imageArray[5]} alt="Image-1" />
            <p>
              Discussing future of Agrochemicals with SRI TUMMALA NAGESWARA RAO.
              The Hon'ble Agriculture Minister of Telangana.
            </p>
          </div>

          <div
            class="image image2"
            onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.button === 1) {
                const newTabUrl = "/Event-Gallery";
                window.open(newTabUrl, "_blank");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/Event-Gallery");
              }
            }}
          >
            <img src={imageArray[17]} alt="Image-2" />
            <p>Exhibiting ICSCE, PMFAI in Dubai on February 8-9.</p>
          </div>

          <div
            class="image image3"
            onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.button === 1) {
                const newTabUrl = "/Event-Gallery";
                window.open(newTabUrl, "_blank");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/Event-Gallery");
              }
            }}
          >
            <img src={imageArray[4]} alt="Image-3" />
            <p>Exhibiting at IIAB in Hyderabad on August 29-30.</p>
          </div>

          <div
            class="image image4"
            onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.button === 1) {
                const newTabUrl = "/Event-Gallery";
                window.open(newTabUrl, "_blank");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/Event-Gallery");
              }
            }}
          >
            <img src={imageArray[10]} alt="Image-4" />
            <p>Exhibiting ICSCE, PMFAI 2024 in Delhi on September 2-3.</p>
          </div>

          <div class="explore-more">
            <div
              className="explore-link"
              onClick={(event) => {
                if (event.ctrlKey || event.metaKey || event.button === 1) {
                  const newTabUrl = "/Event-Gallery";
                  window.open(newTabUrl, "_blank");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate("/Event-Gallery");
                }
              }}
            >
              <p className="explore">Explore More</p>

              <MdArrowOutward
                className="arrow"
                color={"var(--bg-secondary)"}
                size={60}
              />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Updates;
