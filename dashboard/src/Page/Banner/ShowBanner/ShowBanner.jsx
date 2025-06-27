import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ShowBanner.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowBanner() {
  const [productContactDetail, setProductContactDetail] = useState([]);

  const [updateBanner, setUpdateBanner] = useState(false);
  const navigate = useNavigate();

  const handlePositionChange = (index, newPosition) => {
    if (newPosition < 0) {
      toast.warn("Banner Number cannot be negativ", {
        position: "bottom-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    const updatedItems = [...productContactDetail];
    updatedItems[index].Position = newPosition;
    setProductContactDetail(updatedItems); // Update the state with new Position
    setUpdateBanner(true);
  };

  const getAllBanner = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/productBanners`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          setProductContactDetail(response?.data?.data);
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

  const UpdateAllBanner = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/UpdateAllBanner`,
      method: "put",
      data: productContactDetail,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          toast.success(response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          setUpdateBanner(false);
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

  const deleteBanner = (BannerID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this?"
    );

    if (!confirmDelete) return;
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/productBanner/${BannerID}`,
      method: "delete",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          setProductContactDetail((prev) =>
            prev.filter((Banner) => Banner._id != BannerID)
          );
          toast.success(response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
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
    getAllBanner();
  }, []);

  return (
    <div className="MainHomeDiv">
      <div className="headingdiv">
        <h1>Check ALL Current Banner</h1>
        <button onClick={() => navigate("/CreateBanner")}>Add Banner</button>
      </div>
      <div className="dashboard-container-contact">
        <div className="responses">
          <div className="resonse-head m-0 w-100 row">
            <div className="response-contact col-1 text-center">
              <div className="name-head d-flex justify-content-center">
                <h6>Number</h6>
              </div>
            </div>
            <div className="response-name col-2 text-center">
              <h6>Title</h6>
            </div>
            <div className="response-purpose col-1 text-center">
              <div className="name-head ">
                <h6 className="">SubTitle</h6>
              </div>
            </div>
            <div className="response-contact col-2 text-center">
              <div className="name-head d-flex justify-content-center">
                <h6>Weight</h6>
              </div>
            </div>

            <div className="response-contact col-2 text-center">
              <div className="name-head d-flex justify-content-center">
                <h6>Image</h6>
              </div>
            </div>

            <div className="response-contact col-2 text-center">
              <div className="name-head ">
                <h6>Edit</h6>
              </div>
            </div>
            <div className="response-contact col-2 text-center">
              <div className="name-head ">
                <h6>Delete</h6>
              </div>
            </div>

            <hr />
            {productContactDetail.length > 0 &&
              productContactDetail?.map((item, index) => {
                return (
                  <div key={index} className="about-response row">
                    <div className="about-response-name-outer col-1 text-center">
                      <div className="about-response-name">
                        <input
                          type="text"
                          value={item.Position}
                          onChange={(e) =>
                            handlePositionChange(index, e.target.value)
                          }
                          placeholder="Enter Position"
                        />
                      </div>
                    </div>
                    <div className="about-response-name-outer col-2 text-center">
                      <div className="about-response-name ">
                        <p>{item?.Title}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer col-1 text-center">
                      <div className="about-response-contact ">
                        <p className="text-start ">{item?.SubTitle}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer col-2 text-center">
                      <div className="about-response-contact ">
                        <p>{item?.Weight}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer col-2 text-center">
                      <div className="about-response-contact ">
                        <img src={item?.Image} alt="...Loding" />
                      </div>
                    </div>
                    <div className="about-response-purpose-outer col-2 text-center">
                      <div className="about-response-purpose ">
                        <button
                          className="btn border"
                          onClick={() => navigate(`/EditBanner/${item._id}`)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="about-response-purpose-outer col-2 text-center">
                      <div className="about-response-purpose ">
                        <button
                          className="btn border"
                          onClick={() => deleteBanner(item?._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {updateBanner && (
        <button onClick={UpdateAllBanner}>Update Banner Ranking</button>
      )}
      <ToastContainer />
    </div>
  );
}

export default ShowBanner;
