import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function CreateBlogPage() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: "", description: "", image: [] });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    try {
      if (!blog.image || blog.image.length === 0) {
        console.warn("No images to upload");
        return [];
      }

      const formDataData = new FormData();

      // Append all images to FormData
      blog.image.forEach((image) => {
        formDataData.append("images", image);
      });

      // API call to upload all images
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/uploadImage`,
        formDataData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.data?.success) {
        console.log("Uploaded image URLs:", response.data.urls);
        return response.data.urls; // Return array of uploaded image URLs
      } else {
        console.error("Image upload failed:", response.data.message);
        return []; // Return an empty array in case of failure
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      return []; // Return an empty array if an error occurs
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const updatedMaterials = await handleImageUpload();

    if (!blog.title || !blog.description) {
      toast.error("All fields are required!");
      return;
    }

    if (!Array.isArray(blog?.image) || blog?.image.length === 0) {
      alert("Add Image");
      return;
    }

    // Upload images to Cloudinary in parallel
    const uploadPromises = blog?.image.map(async (img) => {
      if (img instanceof File || img instanceof Blob) {
        const formData = new FormData();
        formData.append("file", img);
        formData.append("upload_preset", "ml_default"); // Replace with your Cloudinary preset

        try {
          const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/drs7lkybe/image/upload",
            formData
          );
          return data.secure_url || null;
        } catch (error) {
          console.error("Cloudinary Upload Error:", error);
          return null;
        }
      } else {
        console.error("Invalid image format:", img);
        return null;
      }
    });

    const uploadedImageUrls = (await Promise.all(uploadPromises)).filter(
      Boolean
    );

    if (uploadedImageUrls.length === 0) {
      alert("Image upload failed");
      return;
    }

    console.log("Uploaded Images:", uploadedImageUrls);

    const updatedFormData = {
      ...blog,
      image: uploadedImageUrls[0],
    };

    let config = {
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "api/createBlog",
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
          //   navigate("/");
        } else if (response?.data?.status !== 200) {
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

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="text-center mt-4">Create New Blog</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter blog description"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setBlog({ ...blog, image: files });
            }}
            accept="image/*"
            className="form-control"
            placeholder="Enter image"
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default CreateBlogPage;
