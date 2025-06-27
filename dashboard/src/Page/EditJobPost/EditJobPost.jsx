import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditJobPost.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditJobPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    position: "",
    role: "",
    lowSalary: "",
    highSalary: "",
    vacancy: "",
    otherDetails: "",
    jobdec: "", // Will store the new file object (if uploaded)
  });

  const [existingJobDescUrl, setExistingJobDescUrl] = useState(""); // Store existing PDF URL

  useEffect(() => {
    getCareer();
  }, []);

  // Fetch Job Details
  const getCareer = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + `api/getJobPostById/${id}`
      );

      if (response?.data?.status === true) {
        const jobData = response.data.data;
        setFormData(jobData);
        setExistingJobDescUrl(jobData.jobdec || ""); // Save current PDF URL
      } else {
        toast.error("Failed to fetch job details.", { theme: "light" });
      }
    } catch (error) {
      toast.error("Error fetching job details.", { theme: "light" });
    }
  };

  // Convert PDF to URL (Only if a new file is uploaded)
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

  // Handle Form Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, jobdec: file }); // Store new file object
  };

  // Update Job Post
  const UpdateNewJob = async (e) => {
    e.preventDefault();

    let pdfUrl = existingJobDescUrl; // Default to existing URL

    if (formData.jobdec && typeof formData.jobdec !== "string") {
      pdfUrl = await convertPdfUrl(formData.jobdec); // Convert only if a new file is uploaded
    }

    const updatedFormData = { ...formData, jobdec: pdfUrl }; // Update with new or existing PDF URL

    try {
      const response = await axios.put(
        process.env.REACT_APP_BASE_URL + `api/updateJobPost/${id}`,
        updatedFormData
      );

      if (response?.data?.status) {
        toast.success("Job updated successfully!", { theme: "dark" });
        navigate("/Career");
      } else {
        toast.error("Failed to update job.", { theme: "light" });
      }
    } catch (error) {
      toast.error("Error updating job post.", { theme: "light" });
    }
  };

  return (
    <div className="MainCreateJob">
      <div className="createBlog">
        <section>
          <div className="form_data">
            <div className="form_heading">
              <h1>Update Job</h1>
            </div>

            <form>
              <div className="form_input">
                <label>Title Of Job</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Title Of Job"
                />
              </div>

              <div className="form_input">
                <label>Position</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Full-Time or Part-Time or Intern"
                />
              </div>

              <div className="form_input">
                <label>Low Salary</label>
                <input
                  type="number"
                  name="lowSalary"
                  value={formData.lowSalary}
                  onChange={handleChange}
                  placeholder="Low Salary"
                />
              </div>

              <div className="form_input">
                <label>High Salary</label>
                <input
                  type="number"
                  name="highSalary"
                  value={formData.highSalary}
                  onChange={handleChange}
                  placeholder="High Salary"
                />
              </div>

              <div className="form_input">
                <label>Vacancy</label>
                <input
                  type="number"
                  name="vacancy"
                  value={formData.vacancy}
                  onChange={handleChange}
                  placeholder="Vacancy"
                />
              </div>

              <div className="form_input">
                <label>Job Description (PDF)</label>
                {existingJobDescUrl && (
                  <p>
                    <a
                      href={existingJobDescUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Current PDF
                    </a>
                  </p>
                )}
                <input
                  type="file"
                  name="jobdec"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
              </div>

              <div className="form_input">
                <label>Other Details</label>
                <textarea
                  name="otherDetails"
                  value={formData.otherDetails}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Additional job details"
                />
              </div>

              <button
                onClick={UpdateNewJob}
                className="btn btn-outline-success fw-bold"
                type="submit"
              >
                Update Job Post
              </button>
            </form>
          </div>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditJobPost;
