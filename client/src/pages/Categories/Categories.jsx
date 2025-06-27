import React from "react";
import "./Categories.scss";
import CategorieProduct from "../../components/CategorieProduct/CategorieProduct";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../..//assets/images/Categories/Ellipse 21.png";
import img2 from "../..//assets/images/Categories/bg1.png";
import img3 from "../..//assets/images/Categories/bg1.png";
import ContactUs from "../contactUs/ContactUs";
import { RiSearchLine } from "react-icons/ri";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogForm from "../../components/DialogForm/DialogForm";
import product1 from "../../assets/images/hot product/b (1).webp";
import product2 from "../../assets/images/hot product/b (2).webp";
import product3 from "../../assets/images/hot product/b (3).webp";
import product4 from "../../assets/images/hot product/b (4).webp";

import { useNavigate } from "react-router-dom";

import { serviceLists } from "../../constants/constants";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 999 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 999 }}
      onClick={onClick}
    />
  );
}
const categories = serviceLists;

const unwantedSubCategories = [
  "Emulsifier for EC",
  "Nitrobenzene Emulsifier",
  "Surfactant For SC",
  "Surfactant For WP",
  "Adjuvant For SL",
  "Conventional Emulsifier",
];

export default function Categories() {
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    // initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 750, // Screen width below 500px
        settings: {
          slidesToShow: 1, // Show only one slide
        },
      },
    ],
  };

  const [active, setActive] = useState(0);
  const [countItem, setCountItem] = useState(4);
  const [rotateAdd, setRotateAdd] = useState(360 / 4);

  const nextSlide = () => {
    console.log("nextSlide");
    setActive((prev) => (prev + 1) % countItem); // Loop back to the first slide
  };

  // Go to the previous slide
  const prevSlide = () => {
    console.log("Previous slide");
    setActive((prev) => (prev - 1 + countItem) % countItem); // Loop to the last slide
  };

  const [products, setProducts] = useState([]);

  const [input, setInput] = useState(""); // To store the user's input
  const [suggestions, setSuggestions] = useState([]); // To store filtered suggestions

  const [categoriesData, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [productsForForm, setProductsForForm] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      const filteredSuggestions = products.filter((item) =>
        [item?.Name, item?.ProductCode]
          .filter(Boolean) // Remove undefined/null values
          .some((field) => field.toLowerCase().includes(value.toLowerCase()))
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

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

          const dataSet = response?.data?.products;
          console.log(dataSet);
          const filteredSubCategories = dataSet?.filter((product) => {
            // If the product has no subCategories field, include it
            if (!product.subCategories) {
              return true;
            }

            // Otherwise, exclude products with unwanted subCategories
            return !unwantedSubCategories.includes(product.subCategories.Name);
          });
          setProducts(filteredSubCategories);
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

  const navigate = useNavigate();
  // diolog from
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = (e) => {
    e.stopPropagation();
    setOpenDialog(!openDialog);
  };
  // data for the mobole
  const productData = [
    {
      title: "Acid Thickener",
      tag: "Product of the day",
      sol: "FX T-20",
      weight: "50kgs | 200Kgs",
      img: product3,
      id: "Acid_Thickener/FX_T-20",
    },
    {
      title: "Orthosilicic acid",
      tag: "Product of the day",
      // sol: "Orthosilicic Acid 2% 25 WSL",
      weight: "50kgs | 200Kgs",
      img: product1,
      id: "Orthosilicic_Acid_2%25_WSL",
    },
    {
      title: "Silicon super spreader fx spt 500",
      tag: "Product of the day",
      sol: "FX SPT 500",
      weight: "50kgs | 200Kgs",
      img: product2,
      id: "Silicon_Super_Spreader/FX_SPT_500",
    },
    {
      title: "Neem oil emulsifier",
      tag: "Product of the day",
      sol: "DIKO ENO",
      weight: "50kgs | 200Kgs",
      img: product4,
      id: "Neem_Oil_Emulsifier/DIKO_ENO",
    },
  ];

  return (
    <div className="categories">
      <div className="categories-inner">
        <div className="bg-inner">
          <h1>
            FENTON <br /> CHEMICALS<span style={{ color: "#8DD3FF" }}>.</span>
          </h1>
          <p>Discover the Perfect Formula for Your Needs</p>

          <div className="MainSerchBar">
            <div className="serchbar" style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Search for products and services"
                value={input}
                onChange={handleInputChange} // Listen for changes in the input
                style={{
                  width: "100%",
                  padding: "8px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <RiSearchLine
                className="serchicon cursor-pointer"
                size={24}
                style={{ cursor: "pointer" }}
              />
            </div>

            {suggestions.length > 0 && (
              <div
                className="suggestions"
                style={{
                  marginTop: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  background: "#fff",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  maxHeight: "150px", // Limit the height to 150px
                  overflowY: "auto", // Enable vertical scrolling
                }}
              >
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "8px",
                      borderBottom:
                        index !== suggestions.length - 1
                          ? "1px solid #eee"
                          : "none",
                      cursor: "pointer",
                    }}
                    onClick={(event) => {
                      let newTabUrl = "";
                      if (suggestion?.Name === "Orthosilicic Acid 2% WSL") {
                        newTabUrl = "/Orthosilicic_Acid";
                      } else if (
                        suggestion?.Name === "Powder Silicon Spreader"
                      ) {
                        newTabUrl = "/Fensil360";
                      } else if (
                        suggestion?.Name === "pH Balancer (Multibalance 4 in 1)"
                      ) {
                        newTabUrl = "/MultiBalance4IN1";
                      } else {
                        const productName = suggestion?.Name?.trim().replace(
                          /\s+/g,
                          "_"
                        );
                        const productCode =
                          suggestion?.ProductCode?.trim().replace(/\s+/g, "_");

                        newTabUrl = productCode
                          ? `/product-details/${encodeURIComponent(
                              productName
                            )}/${encodeURIComponent(productCode)}`
                          : `/product-details/${encodeURIComponent(
                              productName
                            )}`;
                      }

                      if (
                        event.ctrlKey ||
                        event.metaKey ||
                        event.button === 1
                      ) {
                        window.open(newTabUrl, "_blank");
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        navigate(newTabUrl);
                      }
                    }}
                  >
                    {suggestion?.Name +
                      (suggestion?.ProductCode
                        ? ` (${suggestion.ProductCode})`
                        : "")}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="second-section">
        <CategorieProduct categories={categories} />
      </div>

      <div className="hotProduct">
        <div className="hot-product-inner">
          <h4 className="head">TRENDING NOW</h4>
          <h4 className="sec-head">
            Hot <span>Products</span>
          </h4>
          <p>
            We are among the leading manufacturers and suppliers of this domain,
            broadly engrossed in <br /> offering a wide range of Industrial
            Chemicals. Offered chemicals are highly demanded among <br /> the
            customers for their accurate formulation and longer shelf life.
          </p>
        </div>

        <div className="acid-setion">
          <div className="acit-container">
            <div className="acidImg">
              <div className="img-info">
                <p>Product of the day</p>
                <h4>Acid Thickener</h4>
                <div className="diko">
                  <p className="sol">DIKO SOL 50</p> <p>50kgs | 200Kgs</p>
                </div>
                <button className="getbtn">View Product Details</button>
                <button>More Details</button>
              </div>
            </div>
          </div>

          {/* bg image */}
          <div className="bg-img-section">
            <img className="bgOne" src={img1} alt="" />
            <img className="bgtwo" src={img2} alt="" />
            <img className="bgthree" src={img3} alt="" />
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="slider-container">
        <Slider {...settings}>
          {productData.map((product, index) => {
            console.log("Product Data:", product); // move console.log outside return

            return (
              <div
                className="item"
                key={index}
                // style={{ backgroundImage: `url(${product.img})` }}
              >
                <img src={product.img} alt="" />
                <div className="img-info">
                  <p>{product.tag}</p>
                  <h4>{product.title}</h4>
                  <div className="diko">
                    {product?.sol && <p className="sol">{product.sol}</p>}

                    <p>{product.weight}</p>
                  </div>
                  <button
                    className="getbtn"
                    onClick={(event) => {
                      if (
                        event.ctrlKey ||
                        event.metaKey ||
                        event.button === 1
                      ) {
                        // If Ctrl (or Command on macOS) or middle mouse button is clicked

                        const newTabUrl = "/product-details/" + product.id;
                        window.open(newTabUrl, "_blank");
                      } else {
                        // Default behavior for normal left-click
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        navigate("/product-details/" + product.id);
                      }
                    }}
                  >
                    View Product Details
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/*  */}
      <div className="slider">
        <div
          className="images"
          style={{ "--rotate": `${-active * rotateAdd}deg` }}
        >
          <div
            className={`slide one ${active === 0 ? "active" : ""}`}
            style={{
              opacity: active === 0 ? 1 : 0,
            }}
          >
            <div className="img-info">
              <p>Product of the day</p>
              <h4>Acid Thickener</h4>
              <div className="diko">
                <p className="sol">{productData[0]?.sol}</p>
                <p>50kgs | 200Kgs</p>
              </div>
              <button
                className="getbtn"
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    // If Ctrl (or Command on macOS) or middle mouse button is clicked

                    const newTabUrl = "/product-details/" + productData[0].id;
                    window.open(newTabUrl, "_blank");
                  } else {
                    // Default behavior for normal left-click
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/product-details/" + productData[0].id);
                  }
                }}
              >
                View Product Details
              </button>
              {/* <button>More Details</button> */}
            </div>
          </div>

          <div
            className={`slide two ${active === 1 ? "active" : ""}`}
            style={{
              opacity: active === 1 ? 1 : 0,
            }}
          >
            <div className="img-info">
              <p>Product of the day</p>
              <h4>Orthosilicic acid</h4>
              <div className="diko">
                {/* <p className="sol">{productData[1]?.sol}</p> */}
                <p>50kgs | 200Kgs</p>
              </div>
              <button
                className="getbtn"
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    // If Ctrl (or Command on macOS) or middle mouse button is clicked

                    const newTabUrl = "/product-details/" + productData[1].id;
                    window.open(newTabUrl, "_blank");
                  } else {
                    // Default behavior for normal left-click
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/product-details/" + productData[1].id);
                  }
                }}
              >
                View Product Details
              </button>
              {/* <button>More Details</button> */}
            </div>
          </div>

          <div
            className={`slide three ${active === 2 ? "active" : ""}`}
            style={{
              opacity: active === 2 ? 1 : 0,
            }}
          >
            <div className="img-info">
              <p>Product of the day</p>
              <h4>
                Silicon super spre- <br />
                ader fx spt 500
              </h4>
              <div className="diko">
                <p className="sol">{productData[2]?.sol}</p>
                <p>50kgs | 200Kgs</p>
              </div>
              <button
                className="getbtn"
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    // If Ctrl (or Command on macOS) or middle mouse button is clicked

                    const newTabUrl = "/product-details/" + productData[2].id;
                    window.open(newTabUrl, "_blank");
                  } else {
                    // Default behavior for normal left-click
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/product-details/" + productData[2].id);
                  }
                }}
              >
                View Product Details
              </button>
              {/* <button>More Details</button> */}
            </div>
          </div>

          <div
            className={`slide four ${active === 3 ? "active" : ""}`}
            style={{
              opacity: active === 3 ? 1 : 0,
            }}
          >
            <div className="img-info">
              <p>Product of the day</p>
              <h4>Neem oil emulsifier</h4>
              <div className="diko">
                <p className="sol">{productData[3]?.sol}</p>{" "}
                <p>50kgs | 200Kgs</p>
              </div>
              <button
                className="getbtn"
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.button === 1) {
                    // If Ctrl (or Command on macOS) or middle mouse button is clicked

                    const newTabUrl = "/product-details/" + productData[3].id;
                    window.open(newTabUrl, "_blank");
                  } else {
                    // Default behavior for normal left-click
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    navigate("/product-details/" + productData[3].id);
                  }
                }}
              >
                View Product Details
              </button>
              {/* <button>More Details</button> */}
            </div>
          </div>

          <div
            className={`slide five ${active === 4 ? "active" : ""}`}
            style={{
              opacity: active === 4 ? 1 : 0,
            }}
          >
            <div className="img-info">
              <h4>Acid Thickener</h4>
              <div className="diko">
                <p className="sol">DIKO SOL 50</p> <p>50kgs | 200Kgs</p>
              </div>
              <button className="getbtn" onClick={handleDialog}>
                View Product Details
              </button>
              {/* <button>More Details</button> */}
            </div>
          </div>
        </div>

        <div className="bg-img-section">
          <img className="bgOne" src={img1} alt="" />
          <img className="bgtwo" src={img2} alt="" />
          <img className="bgthree" src={img3} alt="" />
        </div>
        {/* Navigation Buttons */}
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <div className="whitediv"></div>
      <div className="cnct">
        <ContactUs />
      </div>
      <div className="dialog-container">
        <DialogForm
          isOpen={openDialog}
          handleDialog={handleDialog}
          categories={categoriesData}
          subCategories={subCategories}
          products={productsForForm}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
