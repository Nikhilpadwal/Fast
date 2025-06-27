import React, { useEffect, useState } from "react";
import "./Candidate.scss";
import axios from "axios";
import pdflogo from "../../assets/pdflogo.webp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//done
function Candidate() {
  const [productContactDetail, setProductContactDetail] = useState([]);

  const getAllCandidateDetails = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllCandidate`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          const dataSet = response?.data?.data;
          setProductContactDetail(dataSet);
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

  const DeleteCandidate = (CanDateID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job post?"
    );

    if (!confirmDelete) return;

    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/DeleteCandidate/${CanDateID}`,
      method: "delete",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          setProductContactDetail((prev) =>
            prev.filter((candidate) => candidate._id !== CanDateID)
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
    getAllCandidateDetails();
  }, []);

  return (
    <div className="dashboard-main mt-4 mb-2">
      <div className="dashboard-container-contact">
        <div className="responses ">
          <div className="resonse-head m-0 w-100  row">
            <div className="response-name col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>Name</h6>
              </div>
            </div>
            <div className="response-contact col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>EmailId</h6>
              </div>
            </div>
            {/* <div className="response-purpose col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>phoneNumber</h6>
              </div>
            </div> */}
            <div className="response-contact col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>Resume</h6>
              </div>
            </div>
            {/* <div className="response-contact col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>location</h6>
              </div>
            </div> */}
            <div className="response-contact col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>Role</h6>
              </div>
            </div>
            <div className="response-contact col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>OtherDetails</h6>
              </div>
            </div>
            <div className="response-contact col-2 bg-primary border">
              <div className="name-head d-flex justify-content-center">
                <h6>Delete</h6>
              </div>
            </div>

            <hr />
            {productContactDetail?.map((item, index) => {
              {
                console.log("fdfdfdff", item);
              }
              return (
                <div key={index} className="about-response m-0 p-0 row">
                  <div className="about-response-name-outer border mt-0 col-2">
                    <div className="about-response-name ">
                      <p>{item?.name}</p>
                    </div>
                  </div>
                  <div className="about-response-contact-outer border mt-0 col-2">
                    <div className="about-response-contact ">
                      <p>{item?.emailId}</p>
                    </div>
                  </div>
                  {/* <div className="about-response-contact-outer border mt-0 col-2">
                    <div className="about-response-contact ">
                      <p>{item?.phoneNumber}</p>
                    </div>
                  </div> */}
                  <div className="about-response-purpose-outer border mt-0 col-2 text-center ">
                    <div className="about-response-purpose ">
                      {/* <a href={item?.cv} download="filename.pdf"> */}
                      <a
                        href={item?.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={pdflogo}
                          alt="PDF Icon"
                          style={{ width: "50px" }}
                        />
                      </a>
                    </div>
                  </div>
                  {/* <div className="about-response-contact-outer border mt-0 col-1">
                    <div className="about-response-contact ">
                      <p>{item?.location}</p>
                    </div>
                  </div> */}
                  <div className="about-response-contact-outer border mt-0 col-2">
                    <div className="about-response-contact ">
                      <p>{item?.role}</p>
                    </div>
                  </div>
                  <div className="about-response-contact-outer border mt-0 col-2">
                    <div className="about-response-contact ">
                      <p>{item?.otherDetails}</p>
                    </div>
                  </div>

                  <div className="about-response-purpose-outer border mt-0 col-2">
                    <div className="about-response-purpose ">
                      <button
                        onClick={() => DeleteCandidate(item?._id)}
                        style={{
                          borderRadius: "10px",
                          boxShadow: "5px 10px 10px rgba(128, 128, 128, 0.496)",
                        }}
                        className="btn btn-danger"
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

export default Candidate;
