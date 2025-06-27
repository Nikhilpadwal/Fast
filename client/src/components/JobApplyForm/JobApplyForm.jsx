import React, { useState } from "react";
import "./JobApplyForms.scss";
import { MdOutlineCancel } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function JobApplyForm({ close, role }) {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    cv: null, // Store file object instead of string
    department: role,
    otherDetails: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input separately
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      cv: e.target.files[0], // Store file object
    }));
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
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure CV is uploaded
    if (!formData.cv) {
      toast.error("Please upload your CV");
      return;
    }

    // Convert CV to URL
    const pdfUrl = await convertPdfUrl(formData.cv);
    if (!pdfUrl) return; // Stop submission if upload fails

    // Update formData with CV URL
    const updatedFormData = { ...formData, cv: pdfUrl };

    const config = {
      url: process.env.REACT_APP_BASE_URL + "api/CreateCandidate",
      method: "post",
      data: updatedFormData,
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status === true) {
          toast.success(response?.data?.message);

          // Close after 3 seconds (3000 ms)
          setTimeout(() => {
            close();
          }, 3000);
        } else {
          toast.warn(response?.data?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="JobApplyForm">
      <p className="icon text-danger">
        <MdOutlineCancel size={25} onClick={close} />
      </p>
      <h5 className="text-center mb-4">
        Fill <span>Details</span>
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="email"
            name="emailId"
            placeholder="Email"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="file"
            name="cv"
            onChange={handleFileChange}
            required
            accept="application/pdf"
            className="fileupload"
            style={{ fontSize: "11px", fontWeight: "300" }}
          />
        </div>

        <div className="otherDet">
          <textarea
            name="otherDetails"
            placeholder="Other Details"
            rows="3"
            cols="50"
            value={formData.otherDetails}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <ToastContainer position="bottom-right" autoClose={4000} />
    </div>
  );
}
