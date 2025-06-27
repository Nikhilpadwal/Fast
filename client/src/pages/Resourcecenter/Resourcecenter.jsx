import React, { useEffect, useState } from "react";
import "./Resourcecenter.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoSearch } from "react-icons/io5";
import blog1 from "../../assets/images/dummy/topevent1.webp";
import blog2 from "../../assets/images/dummy/topevent2.webp";
import blog3 from "../../assets/images/dummy/event1.webp";
import blog4 from "../../assets/images/dummy/event2.webp";
import blog5 from "../../assets/images/dummy/event3.webp";
import { LuCalendarDays } from "react-icons/lu";
import NewEvents from "../../components/NewEvents/NewEvents";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resourcecenter = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const getAllBlog = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllBlogs`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          // console.log()
          setBlogs(response?.data?.data);
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

  const [searchBlog, setSearchBlog] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() == "") {
      // If the input is empty, clear the searchBlog array
      setSearchBlog([]);
      return;
    }

    // Filter blogs based on the search text
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchBlog(filteredBlogs);
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <div className="resourcecenter">
      {/* Hero Section */}
      <div className="resource-hero-img-section">
        <div className="img-overlay">
          <div className="resource-main-hero-content-section">
            <h1 className="resource-content">Resource Center</h1> 
            
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="search">
        <div className="search-container">
          <div className="row">
            <div className="col-12 col-sm-3 search-text">
              <h3>Search Blogs</h3>
            </div>
            <div className="col-sm-9 col-12 d-flex align-items-center">
              <div className="forminput">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchText}
                  onChange={handleSearch}
                />
                <div className="icons">
                  <IoSearch />
                </div>
              </div>
            </div>
          </div>
          <div className="posts">
            {searchBlog.map((item, index) => (
              <div
                key={index}
                className="left-single-blog"
                // onClick={() => {
                //   navigate("/Singleblog", { state: { blog: item } });
                //   window.scrollTo({ top: 0, behavior: "smooth" });
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
        </div>
      </div>

      {/* All Posts */}
      <div className="all-posts">
        <div className="container-main">
          <div className="heading">
            <h5>All Blog</h5>
          </div>
          <div className="posts">
            {blogs.map((item, index) => (
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
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Resourcecenter;
