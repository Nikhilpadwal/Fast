import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBanner.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditBanner() {
  const { id } = useParams();

  const [checkImage, setCheckImage] = useState(false);

  const [formData, setFormData] = useState({
    Title: "",
    SubTitle: "",
    Weight: "",
    Image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const convertImageUrl = async (file) => {
    const formData = new FormData();
    formData.append("image", file); // API expects `image` as the key

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/uploadBanner`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.data?.success) {
        // Return the image URL
        return response.data.url;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Handle file input specifically for the image
  const handleImageChange = (e) => {
    setCheckImage(true);
    setFormData((prevData) => ({
      ...prevData,
      Image: e.target.files[0], // Capture the uploaded file
    }));
  };

  const UpdateBanner = async (e, bannerId) => {
    e.preventDefault();
    let UpdateBanner = formData;
    if (checkImage) {
      const ImageUrl = await convertImageUrl(formData.Image);

      UpdateBanner = { ...formData, Image: ImageUrl };
    }

    console.log(UpdateBanner);

    let config = {
      method: "put",
      url: process.env.REACT_APP_BASE_URL + `api/productBanner/${id}`,
      data: UpdateBanner,
    };

    await axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          toast.success(response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          navigate("/ShowBanner");
        } else if (response?.data?.status == false) {
          if (response?.data?.response_code == 500) {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else if (response?.data?.response_code == 404) {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          }
        }
      })
      .catch((error) => {
        if (error?.response?.data?.response_code == 401) {
          toast.error("Your token is expired. Please login again.", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        } else {
          toast.warn("Internal Server Error", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  const getBannerData = async () => {
    let config = {
      method: "get",
      url: process.env.REACT_APP_BASE_URL + `api/productBanner/${id}`,
    };

    await axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          setFormData(response?.data?.data);
        } else if (response?.data?.status == false) {
          if (response?.data?.response_code == 500) {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else if (response?.data?.response_code == 404) {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else {
            toast.error("Internal Server Error", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          }
        }
      })
      .catch((error) => {
        if (error?.response?.data?.response_code == 401) {
          toast.error("Your token is expired. Please login again.", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        } else {
          toast.warn("Internal Server Error", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };
  const navigate = useNavigate();

  useEffect(() => {
    getBannerData();
  }, []);

  return (
    <div className="MainCreateJob">
      <div className="createBlog">
        <section>
          <div className="form_data">
            <div className="form_heading">
              <h1>UPdate Banner</h1>
            </div>

            <form>
              <div className="form_input">
                <label htmlFor="Title">Banner Title</label>
                <input
                  type="text"
                  name="Title"
                  value={formData.Title}
                  onChange={handleChange}
                  placeholder="Enter Banner Title"
                />
              </div>

              <div className="form_input">
                <label htmlFor="SubTitle">Banner Subtitle</label>
                <input
                  type="text"
                  name="SubTitle"
                  value={formData.SubTitle}
                  onChange={handleChange}
                  placeholder="Enter Banner Subtitle"
                />
              </div>

              <div className="form_input">
                <label htmlFor="Weight">Banner Weight</label>
                <input
                  type="text"
                  name="Weight"
                  value={formData.Weight}
                  onChange={handleChange}
                  placeholder="Enter Banner Weight"
                />
              </div>

              <div className="form_input">
                <label htmlFor="Image">Upload Image</label>
                <input type="file" name="Image" onChange={handleImageChange} />
                {!checkImage && (
                  <img
                    src={formData.Image}
                    alt="New Banner Added"
                    style={{ width: "200px", height: "auto" }}
                  />
                )}
              </div>

              <div className="form_input">
                <button
                  className="btn btn-outline-success fw-bold"
                  type="submit"
                  onClick={UpdateBanner}
                >
                  Update Banner
                </button>
              </div>
            </form>
          </div>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditBanner;
