import React, { useEffect, useState } from "react";
import "./SingleBlogDetails.scss";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleBlogDetails = () => {
  const navigate = useNavigate();

  const { title } = useParams();

  const [blog, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBlog = () => {
    const config = {
      url:
        process.env.REACT_APP_BASE_URL +
        `api/getBlogByTitle/${title.replace(/_/g, " ")}`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response?.data?.status);
        if (response?.data?.status == true) {
          setLoading(false);
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

  useEffect(() => {
    getAllBlog();
  }, []);

  if (loading) {
    return (
      <div className="skeleton-container">
        <Skeleton height={40} width={200} style={{ marginBottom: 20 }} />
        <Skeleton height={300} width="100%" />
        <Skeleton height={20} width="80%" count={5} style={{ marginTop: 20 }} />
      </div>
    );
  }

  return (
    // <>
    <div className="singblg">
      <button
        className="btn-button"
        onClick={(event) => {
          if (event.ctrlKey || event.metaKey || event.button === 1) {
            const newTabUrl = `/resourcecenter`;
            window.open(newTabUrl, "_blank");
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate(`/resourcecenter`);
          }
        }}
      >
        <IoArrowBackOutline />
      </button>
      <h1 className="text-center hd">{blog.title}</h1>

      <div className="overlay-singleblog">
       
          <div className="image-container">
            <div className="parentImg">
              <img className="fristimg z-5" src={blog?.image} alt="Blog" />
            </div>
            <p
              className="blog-para"
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
              dangerouslySetInnerHTML={{ __html: blog?.description }}
            ></p>
          </div>
     
      </div>

      <ToastContainer />
    </div>
  );
};

export default SingleBlogDetails;
