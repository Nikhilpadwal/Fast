import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./CreateProduct.scss";

function CreateProduct() {
  const [formData, setFormData] = useState({
    Name: "",
    Image: [],
    ProductCode: "",
    description: "",
    Recommended_Adjuvant: "",
    Dosage: "",
    General_Features: [""],
    Instructions: [""],
    VideoGuides: "",
    Categories: "",
    SubCategories: "",
    HotProduct: false,
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle array field changes
  const handleArrayChange = (index, value, field) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Add a new field to an array
  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  // Remove a field from an array
  const removeField = (index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  // Handle image upload
  const handleImageUpload = async () => {
    try {
      if (!formData.Image.length) return [];

      const formDataData = new FormData();
      formData.Image.forEach((image) => {
        formDataData.append("images", image);
      });

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/uploadImage`,
        formDataData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      return response?.data?.success ? response.data.urls : [];
    } catch (error) {
      console.error("Image upload failed:", error);
      return [];
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const uploadedImages = await handleImageUpload();

    if (!Array.isArray(formData?.Image) || formData?.Image.length === 0) {
      alert("Add Image");
      return;
    }

    // Upload images to Cloudinary in parallel
    const uploadPromises = formData?.Image.map(async (img) => {
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

    const updatedFormData = { ...formData, Image: uploadedImageUrls };

    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "api/ProductCreate",
        updatedFormData
      );

      if (response?.data?.status) {
        toast.success("Product Created Successfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
        navigate("/");
      } else {
        toast.error("Error Creating Product", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.warn("Internal Server Error", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="MainCreateJob">
      <div className="createBlog">
        <section>
          <div className="form_data">
            <h1>Create New Product</h1>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form_input">
                <label>Product Name</label>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Enter Product Name"
                  required
                />
              </div>

              {/* Product Code */}
              <div className="form_input">
                <label>Product Code</label>
                <input
                  type="text"
                  name="ProductCode"
                  value={formData.ProductCode}
                  onChange={handleChange}
                  placeholder="Enter Product Code"
                  required
                />
              </div>

              {/* Description */}
              <div className="form_input">
                <label>Description</label>
                <textarea
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter Product Description"
                  required
                />
              </div>

              {/* Recommended Adjuvant */}
              <div className="form_input">
                <label>Recommended Adjuvant</label>
                <input
                  type="text"
                  name="Recommended_Adjuvant"
                  value={formData.Recommended_Adjuvant}
                  onChange={handleChange}
                  placeholder="Enter Recommended Adjuvant"
                />
              </div>

              {/* Dosage */}
              <div className="form_input">
                <label>Dosage</label>
                <input
                  type="text"
                  name="Dosage"
                  value={formData.Dosage}
                  onChange={handleChange}
                  placeholder="Enter Dosage"
                />
              </div>

              {/* General Features (Dynamic Fields) */}
              <div className="form_input">
                <label>General Features</label>
                {formData.General_Features.map((feature, index) => (
                  <div key={index} className="dynamic-input">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleArrayChange(
                          index,
                          e.target.value,
                          "General_Features"
                        )
                      }
                      placeholder="Enter Feature"
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeField(index, "General_Features")}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => addField("General_Features")}
                >
                  + Add Feature
                </button>
              </div>

              {/* Instructions (Dynamic Fields) */}
              <div className="form_input">
                <label>Instructions</label>
                {formData.Instructions.map((instruction, index) => (
                  <div key={index} className="dynamic-input">
                    <input
                      type="text"
                      value={instruction}
                      onChange={(e) =>
                        handleArrayChange(index, e.target.value, "Instructions")
                      }
                      placeholder="Enter Instruction"
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeField(index, "Instructions")}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => addField("Instructions")}
                >
                  + Add Instruction
                </button>
              </div>

              {/* Video Guides */}
              <div className="form_input">
                <label>Video Guide Link</label>
                <input
                  type="text"
                  name="VideoGuides"
                  value={formData.VideoGuides}
                  onChange={handleChange}
                  placeholder="Enter Video Guide Link"
                />
              </div>

              {/* Categories & SubCategories */}
              <div className="form_input">
                <label>Categories</label>
                <input
                  type="text"
                  name="Categories"
                  value={formData.Categories}
                  onChange={handleChange}
                  placeholder="Enter Categories"
                />
              </div>

              <div className="form_input">
                <label>SubCategories</label>
                <input
                  type="text"
                  name="SubCategories"
                  value={formData.SubCategories}
                  onChange={handleChange}
                  placeholder="Enter SubCategories"
                />
              </div>

              {/* Hot Product (Checkbox) */}
              <div className="form_input">
                <label>
                  <input
                    type="checkbox"
                    name="HotProduct"
                    checked={formData.HotProduct}
                    onChange={handleChange}
                  />{" "}
                  Hot Product
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-outline-success fw-bold">
                Create Product
              </button>
            </form>
          </div>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CreateProduct;
