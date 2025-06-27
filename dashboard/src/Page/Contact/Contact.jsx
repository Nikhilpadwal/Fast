import React, { useEffect, useState } from "react";
import "./Contact.scss";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [productContactDetail, setProductContactDetail] = useState([]);

  const getAllContactMessage = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllContacts`,
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
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/deleteContact/${CanDateID}`,
      method: "delete",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          setProductContactDetail((prevDetails) =>
            prevDetails.filter((candidate) => candidate._id !== CanDateID)
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
    getAllContactMessage();
  }, []);

  return (
    <div className="dashboard-main  mb-2">
      <h2 className="text-center m-4">All Contact Details</h2>
      <div className="dashboard-container-contact">
        <div className="responses">
          <div className="resonse-head m-0 w-100 row">
            <div className="response-name bg-primary border col-1">
              <div className="name-head d-flex justify-content-center">
                <h6>Name</h6>
              </div>
            </div>
            <div className="response-contact bg-primary border col-3">
              <div className="name-head d-flex justify-content-center">
                <h6>Email</h6>
              </div>
            </div>
            <div className="response-purpose bg-primary border col-2">
              <div className="name-head d-flex justify-content-center">
                <h6>query</h6>
              </div>
            </div>
            <div className="response-contact bg-primary border col-2">
              <div className="name-head d-flex justify-content-center">
                <h6>message</h6>
              </div>
            </div>

            <div className="response-contact bg-primary border col-2">
              <div className="name-head d-flex justify-content-center">
                <h6>Selected Products</h6>
              </div>
            </div>
            <div className="response-contact bg-primary border col-2">
              <div className="name-head d-flex justify-content-center">
                <h6>Delete</h6>
              </div>
            </div>

            <hr />
            {productContactDetail?.map((item, index) => {
              return (
                <div key={index} className="about-response row">
                  <div className="about-response-name-outer m-0 p-0 border col-1">
                    <div className="about-response-name ">
                      <p>{item?.name}</p>
                    </div>
                  </div>
                  <div className="about-response-contact-outer m-0 p-0 border col-3">
                    <div className="about-response-contact ">
                      <p>{item?.email}</p>
                    </div>
                  </div>
                  <div className="about-response-purpose-outer m-0 p-0 border col-2">
                    <div className="about-response-purpose ">
                      <p>{item?.query}</p>
                    </div>
                  </div>
                  <div className="about-response-purpose-outer m-0 p-0 border col-2">
                    <div className="about-response-purpose ">
                      <p>{item?.message}</p>
                    </div>
                  </div>
                  <div className="about-response-purpose-outer m-0 p-0 border col-2">
                    <div className="about-response-purpose ">
                      {item?.selectedProducts &&
                        item.selectedProducts.length > 0 && (
                          <div className="selected-products">
                            <ul className="m-0 p-0">
                              {item.selectedProducts.map((product, index) => (
                                <li key={index}>
                                  {typeof product === "string"
                                    ? product
                                    : product.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="about-response-purpose-outer m-0 p-0 border col-2">
                    <div className="about-response-purpose ">
                      <button
                        onClick={() => DeleteCandidate(item?._id)}
                        style={
                          {
                            // backgroundColor: "#f1f3fc",
                            // padding: "4%",
                            // border: "1px black solid",
                            // borderRadius: "10px",
                            // boxShadow: "5px 10px 10px rgba(128, 128, 128, 0.496)",
                          }
                        }
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

export default Contact;
