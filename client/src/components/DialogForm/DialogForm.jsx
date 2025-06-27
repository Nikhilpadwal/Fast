import React, { useState, useContext } from "react";
import "./DialogForm.scss";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { CiCircleRemove } from "react-icons/ci";
import { FiXCircle } from "react-icons/fi";

const DialogForm = ({
  isOpen,
  handleDialog,
  categories,
  subCategories,
  products,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    selectedProducts: [],
  });

  console.log(categories, subCategories, products);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateYou = () => {
    // let newErrors = {};

    // Name validation (minimum 3 characters)
    if (formData.name.trim().length < 3) {
      return "Name should be at least 3 characters long.";
    }

    // Phone Number validation (must be digits and 10 characters long)
    if (!/^\d{10}$/.test(formData.phoneNumber.trim())) {
      return "Phone number should be 10 digits.";
    }

    // Email validation (must include @ symbol)
    if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      return "Email should be valid";
    }

    // Message validation (minimum 3 characters)
    if (formData.message.trim().length < 3) {
      return "Message should be at least 3 characters long.";
    }

    // Return true if no errors, otherwise false
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateYou();
    if (errors.length != 0) {
      toast.warn(errors, {
        position: "bottom-right",
        autoClose: 4000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      return;
    }
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/createContact`,
      method: "post",
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Hello");
        console.log(response?.data);
        if (response?.data?.status == true) {
          console.log("dfghj", response?.data);
          toast.success("Contact Details Get Successfully", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
        if (response?.data?.status == false) {
          if (response?.data?.response_code == 500) {
            toast.error("Problem With Data Fetching", {
              position: "bottom-right",
              autoClose: 4000,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
            });
          } else if (response?.data?.response_code == 404) {
            toast.error("Problem With Data Fetching", {
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
          toast.warn("Problem With Data Fetching", {
            position: "bottom-right",
            autoClose: 4000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  const handleProductSelection = (productId) => {
    const product = filteredProducts.find((p) => p._id === productId);

    if (
      product &&
      !formData.selectedProducts.some((p) => p._id === productId)
    ) {
      setFormData({
        ...formData,
        selectedProducts: [...formData.selectedProducts, product],
      });
    }
  };

  const removeProduct = (productId) => {
    setFormData({
      ...formData,
      selectedProducts: formData.selectedProducts.filter(
        (p) => p._id !== productId
      ),
    });
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleCategoryChange = (categoryId) => {
    console.log(categoryId);
    setSelectedCategory(categoryId);
    console.log(products);
    const relatedProducts = products.filter(
      (product) =>
        product.Categories?._id == categoryId ||
        product.SubCategories?._id == categoryId
    );

    console.log(relatedProducts);
    setFilteredProducts(relatedProducts);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog-form-container" onClick={handleDialog}>
      <div
        className="dialog-form"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "black",
        }}
      >
        <h5 className="text-center text-white">Fill Details</h5>
        <span
          class="bi bi-x-circle fs-7 text-danger fw-bold"
          onClick={handleDialog}
        >
          <FiXCircle />
        </span>

        <h1
          className="text-center kkk"
          style={{
            color: "#45a0e5",
            fontSize: "2rem",
            fontWeight: "500",
            margin: "1rem",
          }}
        >
          Get a Call Back
        </h1>
        {/* 
        <p className="fw-bold form-para mt-1 text-center w-100">
          We will talk about your problem and the best way to solve it even if
          you don’t choose us.
        </p> */}

        <form className="row  justify-content-center">
          <div className="col-12">
            <input
              type="text"
              className="form-control rounded-3"
              id="input1"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <input
              type="email"
              className="form-control rounded-3"
              id="input2"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <input
              type="tel"
              className="form-control rounded-3"
              id="input3"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="col-12">
            <textarea
              type="text"
              className="form-control rounded-3"
              id="input4"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="right-container col-12">
            {/* Category Selection */}
            <div className="search-box">
              <select
                value={selectedCategory || ""}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="input-box"
              >
                <option value="" disabled>
                  Select the Category
                </option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.Name}
                  </option>
                ))}
                {subCategories.map((subCat) => (
                  <option key={subCat._id} value={subCat._id}>
                    {subCat.Name}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Selection */}
            {selectedCategory && (
              <div className="search-box">
                <select
                  className="input-box"
                  onChange={(e) => handleProductSelection(e.target.value)}
                >
                  <option value="" disabled>
                    Select the Product
                  </option>
                  {filteredProducts.map((product) => (
                    <option key={product._id} value={product._id}>
                      {product.Name}{" "}
                      {product.ProductCode ? `(${product.ProductCode})` : ""}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Display Selected Products */}

            <div className="selected-products">
              {formData.selectedProducts.length === 0 ? (
                <div className="empty-message">
                  Select multiple products by choosing a category first.
                </div>
              ) : (
                formData.selectedProducts.map((product) => (
                  <div key={product._id} className="selected-product">
                    <span>
                      {product.Name}{" "}
                      {product.ProductCode ? `(${product.ProductCode})` : ""}
                    </span>
                    <button
                      className="text-danger"
                      onClick={() => removeProduct(product._id)}
                    >
                      <FiXCircle />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="col-auto pt-3">
            <button
              type="submit"
              className="letsTalk-btn btn btn-primary p-1 px-4 border-0 rounded-5"
              onClick={handleSubmit}
            >
              Let's Talk
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DialogForm;
