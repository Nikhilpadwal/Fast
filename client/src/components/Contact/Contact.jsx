import React from "react";
import { useState } from "react";
import "./Contact.scss";
import { FiXCircle } from "react-icons/fi";

// IconsManifest..
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
    message: "",
    phoneNumber: "",
    selectedProducts: [],
  });

  // State to handle dropdown and conditional input
  const [selectedOption, setSelectedOption] = useState("");

  // Handle dropdown selection change
  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setFormData({
      ...formData,
      query: value,
      other: value === "Others" ? "" : formData.other, // Reset 'other' if not needed
    });
  };
  //
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Handle input change for text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email");
      return;
    }
    console.log("hello");

    console.log(process.env.REACT_APP_BASE_URL + `api/createContact`);
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/createContact`,
      method: "post",
      data: formData,
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

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getAllProductData = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/GetAllProduct`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response?.data?.status);
        if (response?.data?.status == true) {
          const dataSet = response?.data;
          setCategories(dataSet.categories);

          // Update the state with the filtered list
          setSubCategories(dataSet.subCategories);
          setProducts(dataSet.products);
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

  useEffect(() => {
    getAllProductData();
  }, []);

  return (
    <div>
      <div className="main-container">
        <div className="top-container">
          <div className="form-con">
            <form className="data-collect-div">
              <div className="header">
                <h1>
                  Get in <span className="touch"> Touch </span>
                </h1>

                <p>
                  Have Questions or Need Help? Let's Chat! Our Team is Here to
                  Make Your Day awesome!
                </p>
              </div>

              <div className="dropMail">
                <input
                  className="input-box"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  className="input-box textinput"
                  type="text"
                  name="email"
                  placeholder="Enter your full email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <div className="dropdown input-box">
                  <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleSelectChange}
                  >
                    <option value="">What’s your query all about?</option>
                    <option value="Technical support">Technical support</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Sample Request">Sample Request</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Grievances">Grievances</option>
                    <option value="Press/Media">Press/Media</option>
                    <option value="Press/Media">other</option>
                  </select>
                </div>

                <div className="right-container">
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
                            {product.ProductCode
                              ? `(${product.ProductCode})`
                              : ""}
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
                            {product.ProductCode
                              ? `(${product.ProductCode})`
                              : ""}
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

                <textarea
                  className="input-box"
                  name="message"
                  placeholder="Ask any doubt or just say hi..."
                  value={formData.message}
                  onChange={handleChange}
                />

                <div className="button input-box">
                  <button type="submit" onClick={handleSubmit}>
                    Connect with us
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="Info-con">
            <h4 className="ContHead">CONTACT US</h4>
            <h1 className="con-para">
              We are always ready to help you and{" "}
              <span className="answer">answer</span> your questions.
            </h1>

            <div className="conInfo">
              <div className="contact-left">
                <div className="phoneNum">
                  <h6>Phone</h6>
                  <p>+91-9479854613</p>
                  <p>+91-9098620999</p>
                  <p>+91-9039040241</p>
                </div>

                <div className="location">
                  <h6> Our location</h6>
                  <p>
                    Plot no 15, Balaji Tulsiyana Industrial Area, Village
                    Kumedi, Near Mr 10 Toll Naka, Indore, Madhya Pradesh-
                    453555
                  </p>
                </div>

                <div className="icons">
                  <h6>Social network:</h6>
                  <div className="icon">
                    <FaLinkedinIn
                      className="social-icon linkedin"
                      size={20}
                      onClick={(event) => {
                        const url =
                          "https://www.linkedin.com/company/fentonchemicals/?originalSubdomain=in";
                        if (
                          event.ctrlKey ||
                          event.metaKey ||
                          event.button === 1
                        ) {
                          window.open(url, "_blank");
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          window.location.href = url;
                        }
                      }}
                    />

                    <FaFacebook
                      className="social-icon facebook"
                      size={20}
                      onClick={(event) => {
                        const url = "https://www.facebook.com/fentonchemicals/";
                        if (
                          event.ctrlKey ||
                          event.metaKey ||
                          event.button === 1
                        ) {
                          window.open(url, "_blank");
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          window.location.href = url;
                        }
                      }}
                    />
                    <FaInstagram
                      onClick={(event) => {
                        const url =
                          "https://www.instagram.com/fentonchemicals/";
                        if (
                          event.ctrlKey ||
                          event.metaKey ||
                          event.button === 1
                        ) {
                          window.open(url, "_blank");
                        } else {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          window.location.href = url;
                        }
                      }}
                      className="social-icon twitter"
                      size={20}
                    />
                  </div>
                </div>
              </div>

              <div className="contact-right">
                <div className="mail">
                  <h6>Sales Queries</h6>
                  <p>sales@fentonchemical.com</p>
                  <p>sales1@fentonchemical.com</p>
                  <p>sales2@fentonchemical.com</p>
                </div>

                <div className="mail">
                  <h6>International Queries</h6>
                  <p>Intl.sales@fentonchemical.com</p>
                </div>

                <div className="mail">
                  <h6>Dispatch & Other Inquiry</h6>
                  <p>fentonchem@gmail.com</p>
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
