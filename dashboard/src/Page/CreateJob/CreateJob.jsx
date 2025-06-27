import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateJob.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateJob() {
  //sone
  const [formData, setFormData] = useState({
    position: "",
    role: "",
    lowSalary: "",
    highSalary: "",
    vacancy: "",
    otherDetails: "",
    jobdec: "",
  });

  // const convertPdfUrl = async (file) => {
  //   const formData = new FormData();
  //   formData.append("pdf", file);

  //   console.log(file);

  //   try {
  //     const response = await axios.post(
  //       process.env.REACT_APP_BASE_URL + "api/pdfFile",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     if (response?.data?.success) {
  //       // Set the cv URL in formData
  //       return response.data.url;
  //     }
  //   } catch (error) {
  //     console.error("Error uploading PDF:", error);
  //   }
  // };

  const convertPdfUrl = async (file) => {
    if (!(file instanceof File || file instanceof Blob)) {
      console.error("Invalid PDF file format:", file);
      return null;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log("Form Data:", file);
    formData.append("upload_preset", "ml_default"); // Same preset
    formData.append("resource_type", "raw"); // PDF is a raw file

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/drs7lkybe/raw/upload", // Change 'image' to 'raw'
        formData
      );
      return data.secure_url || null;
    } catch (error) {
      console.error("Cloudinary PDF Upload Error:", error);
      return null;
    }
  };

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const CreateNewJob = async (e) => {
    e.preventDefault();

    const pdfUrl = await convertPdfUrl(formData.jobdec);

    if (!pdfUrl) {
      toast.error("PDF required", {
        position: "bottom-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }

    // Update formData with the converted cv URL
    const updatedFormData = { ...formData, jobdec: pdfUrl };

    let config = {
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "api/addJobPost",
      data: updatedFormData,
    };

    await axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          toast.success("New Job Created successfully", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          navigate("/Career");
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

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFormData({
      ...formData,
      jobdec: e.target.files[0], // store file object
    });
  };

  const navigate = useNavigate();

  return (
    <div className="MainCreateJob">
      <div className="createBlog">
        <section>
          {
            <div className="form_data">
              <div className="form_heading">
                <h1>Create New Job</h1>
              </div>

              <form>
                <div className="form_input">
                  <label htmlFor="role">Title Of Job</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Title Of Job"
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="Full-Time or Part-Time or Intern"
                  />
                </div>

                <div className="form_input">
                  <label htmlFor="lowSalary">Low Salary</label>
                  <input
                    type="number"
                    name="lowSalary"
                    value={formData.lowSalary}
                    onChange={handleChange}
                    placeholder="Low Salary in number wiht zero"
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="highSalary">High Salary</label>
                  <input
                    type="number"
                    name="highSalary"
                    value={formData.highSalary}
                    onChange={handleChange}
                    placeholder="High Salary in number wiht zero"
                  />
                </div>
                <div className="form_input">
                  <label htmlFor="vacancy">Vacancy</label>
                  <input
                    type="number"
                    name="vacancy"
                    value={formData.vacancy}
                    onChange={handleChange}
                    placeholder="Vacancy"
                  />
                </div>

                <input
                  className="input-box textinput"
                  type="file"
                  name="jobdec"
                  accept=".pdf"
                  placeholder="Attach your Job Descriptions (PDF)"
                  style={{ background: "white", color: "gray" }}
                  onChange={handleFileChange}
                  required
                />
                <div className="form_input">
                  <label htmlFor="qualification">Other Point</label>
                  <textarea
                    name="otherDetails"
                    value={formData.otherDetails}
                    onChange={handleChange}
                    placeholder="Job Details"
                    rows="4" // You can adjust the number of rows as needed
                    cols="50" // Optional: set the width of the textarea
                  />
                </div>
                <div className="">
                  <button
                    onClick={CreateNewJob}
                    className="btn btn-outline-success fw-bold"
                    type="submit"
                  >
                    Create Job Posting
                  </button>
                </div>
              </form>
            </div>
          }
        </section>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CreateJob;
