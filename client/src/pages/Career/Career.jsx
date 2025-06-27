import React, { useState } from "react";
import "./Career.scss";
import exportsellpdf from "../../assets/careers/Export Sales Manager JD - Fenton Chemicals.pdf";
import BDE from "../../assets/careers/Fenton BDE JD.pdf";

import { IoPeopleSharp } from "react-icons/io5";
import bgimgs from "../../assets/careers/bgimg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";
import JobApplyForm from "../../components/JobApplyForm/JobApplyForm";
//done

// export const productContactDetail = [
//   {
//     id: 1,
//     role: "Export Sales Manager",
//     vacancy: 1,
//     pdf: exportsellpdf,
//     position: "Full-time",
//     lowSalary: 1,
//     highSalary: 5,
//     otherDetails:
//       "We are looking for candidates who are fluent in English, have a strong ability to generate leads, and excel in the export-import process.",
//   },
//   {
//     id: 1,
//     role: "Business Development Executive ",
//     vacancy: 2,
//     position: "Full-time",
//     pdf: BDE,
//     lowSalary: 0.5,
//     highSalary: 3,
//     otherDetails:
//       "We are seeking a proactive and results-driven Business Development Executive to expand our market presence and drive sales growth.",
//   },
// ];

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    cv: "",
    role: "",
    otherDetails: "",
  });

  const [productContactDetail, setProductContactDetail] = useState([]);
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

  //done
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");

    const pdfUrl = await convertPdfUrl(formData.cv);

    console.log("PDF URL:", pdfUrl);

    if (!pdfUrl) {
      toast.error("PDF upload failed", {
        position: "bottom-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    // Update formData with the converted cv URL
    const updatedFormData = { ...formData, cv: pdfUrl };

    console.log(process.env.REACT_APP_BASE_URL + `api/CreateCandidate`);
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/CreateCandidate`,
      method: "post",
      data: updatedFormData,
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status == true) {
          toast.success(response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
        if (response?.data?.status == false) {
          toast.warn(response?.data?.message, {
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

  const [selectedOption, setSelectedOption] = useState("");

  // Handle input change for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFormData({
      ...formData,
      cv: e.target.files[0], // store file object
    });
  };

  // Handle dropdown selection change
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setFormData({
      ...formData,
      role: value,
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

  // form open
  const [showForm, setShowForm] = useState(false);
  const [jobRole, setJobRole] = useState();

  const handleButtonClick = (jobRole) => {
    setJobRole(jobRole);
    setShowForm(!showForm); // Toggle the form display
  };

  useEffect(() => {
    getAllJobPost();
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top when the component loads
  }, []);

  return (
    <div className="careerMain">
      <div className="innerDiv">
        <div className="leftDiv">
          <div className="headings">
            <h1 className="career">CAREER</h1>
            <h1 className="details mt-2">
              We are always looking <br /> for{" "}
              <span className="span">talented individuals </span> <br /> to{" "}
              <span className="join">join our team</span> and <br /> help us
              achieve <br />
              our goals.
            </h1>
          </div>
          <br />
          <hr style={{ width: "90%" }} />
          <div className="jobs">
            <h2 className="jobhead">Latest Openings</h2>
            <div className="jobs-card-Main">
              {productContactDetail?.length > 0 ? (
                productContactDetail?.map((job) => (
                  <div key={job.id} className="job">
                    <h2 className="jobtitile">{job?.role}</h2>
                    <div className="sallry">
                      <p className="vacancy">
                        <IoPeopleSharp /> | {job?.vacancy} vacancy
                      </p>
                      <p>{job.position}</p>
                    </div>
                    <div className="sallry">
                      <p>
                        Salary :- {formatSalary(job.lowSalary)}-{" "}
                        {formatSalary(job.highSalary)} lakh
                      </p>
                    </div>
                    <hr />
                    <p
                      className="discription"
                      // style={{
                      //   whiteSpace: "nowrap",
                      //   overflow: "hidden",
                      //   textOverflow: "ellipsis",
                      // }}
                    >
                      {job.otherDetails} &nbsp;
                    </p>
                    <a
                      href={job.jobdec}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "12px" }}
                    >
                      More Details...
                    </a>
                    <div className="button">
                      <button onClick={() => handleButtonClick(job?.role)}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h3> Currently No Job Post </h3>
              )}

              {showForm && (
                <div className="JobForm" onClick={() => setShowForm(false)}>
                  <div onClick={(e) => e.stopPropagation()}>
                    <JobApplyForm close={handleButtonClick} role={jobRole} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="rightDiv"
          style={{
            backgroundImage: `url(${bgimgs})`,
            position: "relative",
            objectFit: "cover",
          }}
        >
          <div className="form-con">
            <div className="data-collect-div">
              <div className="header">
                <h1>
                  Career <span className="touch"> Info</span>
                </h1>
                <p>
                  Please make sure that the information provided by you is
                  correct.
                </p>
              </div>

              <div className="dropMail">
                <input
                  className="input-box"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  className="input-box textinput"
                  type="text"
                  name="emailId"
                  placeholder="Email"
                  value={formData.emailId}
                  onChange={handleChange}
                />

                <input
                  className="input-box textinput"
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  placeholder="Attach your resume (PDF or DOC)"
                  style={{ background: "white", color: "gray" }}
                  onChange={handleFileChange}
                />

                <div className="dropdown input-box">
                  <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="">Select Your Interest</option>
                    <option value="BDE">BDE</option>
                    <option value="Sales Executive">Sales Executive</option>
                    <option value="Manager">Manager</option>
                    <option value="Lab Technicians">Lab Technicians</option>
                    <option value="Chemical Engineers">
                      Chemical Engineers
                    </option>
                    <option value="Chemists">Chemists</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                


                <textarea
                  className="input-box"
                  name="otherDetails"
                  placeholder="Other Details"
                  value={formData.otherDetails}
                  onChange={handleChange}
                />

                <div className="button input-box">
                  <button type="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Career;
