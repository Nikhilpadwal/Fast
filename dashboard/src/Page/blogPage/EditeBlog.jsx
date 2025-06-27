import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  const fetchBlogDetails = () => {
    const config = {
      url: `${process.env.REACT_APP_BASE_URL}api/getBlogById/${id}`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status === true) {
          // setBlog((prev) => ({
          //   ...prev,
          //   image: Array.isArray(response?.data?.data?.image)
          //     ? response.data.data.image
          //     : [response.data.data.image], // Ensure it's an array
          // }));
          setBlog((prev) => ({
            ...prev,
            title: response?.data?.data?.title || prev.title,
            description: response?.data?.data?.description || prev.description,
            image: Array.isArray(response?.data?.data?.image)
              ? response.data.data.image
              : [response.data.data.image],
          }));
        } else {
          toast.error("Failed to fetch blog details.", {
            position: "bottom-right",
            autoClose: 4000,
          });
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Error fetching blog.", {
          position: "bottom-right",
          autoClose: 4000,
        });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async () => {
    try {
      if (!blog.image || blog.image.length === 0) {
        console.warn("No images to upload");
        return [];
      }

      const formDataData = new FormData();

      console.log(blog.image);

      // Append all images to FormData
      blog.image.forEach((image) => {
        console.log(image);
        formDataData.append("images", image);
      });

      // Log FormData contents
      formDataData.forEach((value, key) => {
        console.log(key, value);
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

    setLoading(true);

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

    const config = {
      url: `${process.env.REACT_APP_BASE_URL}api/updateBlog/${id}`,
      method: "put",
      data: updatedFormData,
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status === true) {
          toast.success("Blog updated successfully!", {
            position: "bottom-right",
            autoClose: 4000,
          });
          navigate("/BlogPage");
        } else {
          toast.error(response?.data?.message, {
            position: "bottom-right",
            autoClose: 4000,
          });
        }
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message || "Error updating blog.", {
          position: "bottom-right",
          autoClose: 4000,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Edit Blog</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={blog.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={blog.description}
            onChange={handleInputChange}
            rows="4"
            required
          ></textarea>
        </div>
        {/* <div className="mb-3">
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
          />
          {blog.image[0] && (
            <img
              src={blog.image[0]}
              alt="Blog Preview"
              className="mt-3"
              width="100"
              height="80"
              style={{ objectFit: "cover", borderRadius: "5px" }}
            />
          )}
        </div> */}
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
          />

          {blog.image.length > 0 && (
            <div className="position-relative d-inline-block mt-3">
              <img
                src={
                  typeof blog.image[0] === "string"
                    ? blog.image[0]
                    : URL.createObjectURL(blog.image[0])
                }
                alt="Blog Preview"
                width="120"
                height="100"
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
              <button
                type="button"
                onClick={() => setBlog({ ...blog, image: [] })}
                className="btn btn-sm btn-danger position-absolute top-0 start-100 translate-middle"
                style={{
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                }}
                title="Remove Image"
              >
                ✕
              </button>
            </div>
          )}
        </div>
        {/*  */}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default EditBlog;
