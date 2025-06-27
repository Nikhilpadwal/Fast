import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Career() {
  const [productContactDetail, setProductContactDetail] = useState([]);

  const navigate = useNavigate();
  const getAllJobPost = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllJobPosts`,
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

  const deleteJobPost = (JobPostID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job post?"
    );

    if (!confirmDelete) return;

    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/deleteJobPost/${JobPostID}`,
      method: "delete",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          setProductContactDetail((prev) =>
            prev.filter((Jobpost) => Jobpost._id != JobPostID)
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

  const formatSalary = (salary) => {
    if (salary >= 100000) {
      return (salary / 100000).toFixed(1) + "L";
    } else if (salary >= 1000) {
      return (salary / 1000).toFixed(1) + "K";
    }
    return salary; // Return as is if less than 1000
  };

  useEffect(() => {
    console.log("hello");
    getAllJobPost();
  }, []);
  return (
    <div className="MainHomeDiv">
      <div className="headingdiv text-end p-5 pt-0">
        <h1 className="text-center m-4">Check ALL Current Job Post</h1>
        <button className="btn btn-success text-end " onClick={() => navigate("/CreateJob")}>Create New Job</button>
      </div>
      <div className="dashboard-container-contact">
        <div className="responses">
          <div className="resonse-head m-0 w-100 row ">
            <div className="response-name col-2 text-center bg-primary p-2 border">
              <h6>Position</h6>
            </div>
            <div className="response-purpose col-2 text-center bg-primary p-2 border">
              <div className="name-head ">
                <h6 className="">Role</h6>
              </div>
            </div>
            <div className="response-contact col-2 text-center bg-primary p-2 border">
              <div className="name-head d-flex justify-content-center">
                <h6>Salary range</h6>
              </div>
            </div>
            <div className="response-contact col-2 text-center bg-primary p-2 border">
              <div className="name-head d-flex justify-content-center ">
                <h6>vacancy</h6>
              </div>
            </div>

            <div className="response-contact col-2 text-center bg-primary p-2 border">
              <div className="name-head ">
                <h6>Edit</h6>
              </div>
            </div>
            <div className="response-contact col-2 text-center bg-primary p-2 border">
              <div className="name-head ">
                <h6>Delete</h6>
              </div>
            </div>

            <hr />
            {productContactDetail.length > 0 &&
              productContactDetail?.map((item, index) => {
                return (
                  <div key={index} className="about-response row">
                    <div className="about-response-name-outer border mt-0 p-2 col-2 text-center">
                      <div className="about-response-name ">
                        <p>{item?.position}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer border mt-0 p-2 col-2 text-center">
                      <div className="about-response-contact ">
                        <p className="text-start ">{item?.role}</p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer border mt-0 p-2 col-2 text-center">
                      <div className="about-response-contact ">
                        <p>
                          {formatSalary(item?.lowSalary)} -{" "}
                          {formatSalary(item?.highSalary)}
                        </p>
                      </div>
                    </div>
                    <div className="about-response-contact-outer border mt-0 p-2 col-2 text-center">
                      <div className="about-response-contact ">
                        <p>{item?.vacancy}</p>
                      </div>
                    </div>
                    <div className="about-response-purpose-outer border mt-0 p-2 col-2 text-center">
                      <div className="about-response-purpose ">
                        <button
                          className="btn btn-primary border"
                          onClick={() => navigate(`/editJobPost/${item._id}`)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="about-response-purpose-outer border mt-0 p-2 col-2 text-center">
                      <div className="about-response-purpose ">
                        <button
                          className="btn btn-danger border"
                          onClick={() => deleteJobPost(item?._id)}
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
      <ToastContainer />
    </div>
  );
}

export default Career;
