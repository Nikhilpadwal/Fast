import React, { useState } from "react";
import "./CheckoutForAll.scss";
import DialogForm from "../DialogForm/DialogForm";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function CheckoutForAll({ Product, product }) {
  // dILOG
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const words =
    product?.category?.split(" ") || product?.subcategory?.split(" ");

  console.log(words);
  const firstWord = words.slice(0, 1).join(" ");
  const remainingWords = words.slice(1).join(" ");

  const handleDialog = (id) => {
    setSelectedProductId(id);
    setOpenDialog(!openDialog);
  };

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
    <>
      <div className="container">
        <h3 className="first-part-heading m-4">
          <span>{firstWord}</span> {remainingWords}
        </h3>
        <div className="inner-head-2">
          <p>
            Discover cutting-edge solutions designed to transform productivity
            and sustainability in every step of your journey. Our innovative
            products ensure efficiency, safety, and eco-conscious growth for
            your industry.
          </p>
        </div>
      </div>
      <div className="checkourforall p-5">
        {Product.map((item, id) => (
          <div className="allproduct  shadow rounded border" key={item.id}>
            <h4 className="text-start chem-head mb-3">
              {id + 1}. {item.Name}
            </h4>
            <div className="text-center ">
              <button
                className="btn  shadow btn-primary text-center   mt-2 "
                onClick={() => handleDialog(item.id)}
              >
                Contact us
              </button>
            </div>

            {openDialog && selectedProductId === item.id && (
              <div className="dialog-container">
                <DialogForm
                  isOpen={openDialog}
                  handleDialog={() => handleDialog(item.id)}
                  categories={categories}
                  subCategories={subCategories}
                  products={productsForForm}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
