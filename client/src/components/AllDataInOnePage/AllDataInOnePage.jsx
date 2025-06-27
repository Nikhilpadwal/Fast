import React, { useState } from "react";
import "./AllDataInOnePage.scss";
import DialogForm from "../DialogForm/DialogForm";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function AllDataInOnePage({ Product, product }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDialog = (id) => {
    setSelectedProductId(id);
    setOpenDialog(!openDialog);
  };

  console.log("PProduct", Product);
  const words =
    product?.category?.split(" ") || product?.subcategory?.split(" ");

  console.log(words);
  const firstWord = words.slice(0, 1).join(" ");
  const remainingWords = words.slice(1).join(" ");

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [productsForForm, setProductsForForm] = useState([]);

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
          setCategories(response?.data?.categories);
          setSubCategories(response?.data?.subCategories);
          setProductsForForm(response?.data?.products);
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

  useEffect(() => {
    getAllProductData();
  }, []);

  return (
    <div className="product-page">
      <div className="head">
        <div className="inner-head-1">
          <h3 className="first-part-heading">
            <span>{firstWord}</span> {remainingWords}
          </h3>
        </div>

        <div className="inner-head-2">
          <p className="mb-2 para">
            Discover cutting-edge solutions designed to transform productivity
            and sustainability in every step of your journey. Our innovative
            products ensure efficiency, safety, and eco-conscious growth for
            your industry.
          </p>
        </div>
      </div>
      {Product.map((product, index) => (
        <div className="product-card" key={index}>
          {/* Left Side: Image */}
          <div className="product-image-container">
            <img
              src={product.Image[0]}
              alt={product.Name}
              className="product-image"
            />
          </div>

          {/* Right Side: Name, Description, and Features */}

          <div className="product-details">
            <h2 className="product-name">
              {product?.Name}
              {product?.ProductCode ? ` (${product.ProductCode})` : ""}
            </h2>

            <p className="product-description">{product?.description}</p>
            <h3>General Features</h3>
            <ul className="product-features m-0">
              {product?.General_Features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}    
            </ul>
            {product?.Dosage && (
              <h3 className="mt-2">Dosage : {product?.Dosage}</h3>
            )}
            <div className=" btn-con">
              <button
                className="btn btn-primary  mt-3 alldata-contact-btn"
                onClick={() => handleDialog(product.id)}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      ))}
      {openDialog && selectedProductId === Product.id && (
        <div className="dialog-container">
          <DialogForm
            isOpen={openDialog}
            handleDialog={() => handleDialog(Product.id)}
            categories={categories}
            subCategories={subCategories}
            products={productsForForm}
          />
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default AllDataInOnePage;
