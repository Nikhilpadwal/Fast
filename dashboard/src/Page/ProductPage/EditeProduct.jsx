import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateProduct.scss";
import { toast, ToastContainer } from "react-toastify";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}api/getProductById/${id}`)
      .then((response) => {
        setFormData(response.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleArrayChange = (index, value, field) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const addField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeField = (index, field) => {
    const updatedArray = [...formData[field]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    setFormData((prevData) => ({
      ...prevData,
      Image: [...prevData.Image, ...files], // Keep old images and add new ones
    }));
  };

  const removeImage = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      Image: prevData.Image.filter((_, i) => i !== index),
    }));
  };

  const uploadImages = async () => {
    try {
      // Separate existing image URLs and new image files
      const existingImageUrls = formData.Image.filter(
        (img) => typeof img === "string"
      );
      const newImageFiles = formData.Image.filter(
        (img) => typeof img !== "string"
      );

      // If there are no new files, return existing URLs
      if (!newImageFiles.length) return existingImageUrls;

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

      return uploadedImageUrls.length > 0
        ? [...existingImageUrls, ...uploadedImageUrls] // Keep existing URLs & add new uploaded URLs
        : existingImageUrls;
    } catch (error) {
      console.error("Image upload failed:", error);
      return formData.Image; // Return existing data in case of an error
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const updatedImages = await uploadImages();
    const updatedFormData = {
      ...formData,
      Image: updatedImages.length ? updatedImages : formData.Image,
    };
    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}api/UpdateProductById/${id}`,
        updatedFormData
      )
      .then((response) => {
        toast.success("Product updated successfully");
        navigate("/Product");
      })
      .catch((error) => {
        toast.error("Error updating product");
        console.error(error);
      });
  };

  return (
    <div className="MainCreateJob ">
      <div className="createBlog ">
        <section className=" w-75 m-4">
          <div className="form_data">
            <h1>Edit Product</h1>
            <form onSubmit={updateProduct}>
              <div className="form_input">
                <label>Product Name</label>
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form_input">
                <label>Product Code</label>
                <input
                  type="text"
                  name="ProductCode"
                  value={formData.ProductCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form_input">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form_input">
                <label>Recommended Adjuvant</label>
                <input
                  type="text"
                  name="Recommended_Adjuvant"
                  value={formData.Recommended_Adjuvant}
                  onChange={handleChange}
                />
              </div>
              <div className="form_input">
                <label>Dosage</label>
                <input
                  type="text"
                  name="Dosage"
                  value={formData.Dosage}
                  onChange={handleChange}
                />
              </div>
              <div className="form_input">
                <label>General Features</label>
                {formData.General_Features.map((feature, index) => (
                  <div key={index} className="text-end">
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
                    />
                    <button
                      type="button"
                      className="border-danger rounded-2 m-2 text-danger"
                      onClick={() => removeField(index, "General_Features")}
                    >
                      delete
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-success rounded-2"
                  onClick={() => addField("General_Features")}
                >
                  + Add Feature
                </button>
              </div>
              <div className="form_input text-end">
                <label>Instructions</label>
                {formData.Instructions.map((instruction, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      value={instruction}
                      onChange={(e) =>
                        handleArrayChange(index, e.target.value, "Instructions")
                      }
                    />
                    <button
                      type="button"
                      className="border-danger rounded-2 m-2 text-danger"
                      onClick={() => removeField(index, "Instructions")}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  className="btn btn-success rounded-2"
                  type="button"
                  onClick={() => addField("Instructions")}
                >
                  + Add Instruction
                </button>
              </div>
              <div className="form_input">
                <label>Product Images</label>
                <input type="file" multiple onChange={handleImageUpload} />

                <div className="image-preview">
                  {formData.Image.map((image, index) => (
                    <div
                      key={index}
                      style={{ display: "inline-block", position: "relative" }}
                    >
                      <img
                        src={
                          typeof image === "string"
                            ? image
                            : URL.createObjectURL(image)
                        }
                        alt="Product Preview"
                        width="200"
                        style={{ margin: "5px" }}
                      />
                      <button
                        // onClick={() => removeImage(index)}
                        onClick={(e) => {
                          e.preventDefault(); // stop default behavior
                          e.stopPropagation(); // stop bubbling
                          removeImage(index);
                        }}
                        style={{
                          position: "absolute",
                          top: "0px",
                          right: "0",
                          background: "red",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                          padding: "0px",
                          // height: "15px",
                          width: "20px",
                          fontSize: "15px",
                          borderRadius: "50%",
                          display: "flex",
                          fontWeight: "800",
                          alignItems: "center",
                          justifyContent: " cneter",
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form_input d-flex gap-2">
                <input
                  type="checkbox"
                  name="HotProduct"
                  checked={formData.HotProduct}
                  onChange={handleChange}
                />
                <label className="mt-2">Hot Product</label>
              </div>
              <button type="submit" className="btn btn-outline-success">
                Update Product
              </button>
            </form>
          </div>
        </section>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditProduct;
