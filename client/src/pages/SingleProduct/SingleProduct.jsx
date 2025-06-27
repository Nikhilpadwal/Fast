import React, { useEffect, useState } from "react";
import "./SingleProduct.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Skeleton from "react-loading-skeleton"; // Install via `npm install react-loading-skeleton`
import "react-loading-skeleton/dist/skeleton.css";

import ButtonPrimary from "../../components/Common/Button/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/Common/Button/ButtonSecondary/ButtonSecondary";
import { singleProductDescriptionTabs } from "./../../constants/constants";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import DialogForm from "../../components/DialogForm/DialogForm";

function SingleProduct() {
  const { ProductName, ProductCode } = useParams();

  const name = ProductName?.trim().replace(/_/g, " ");
  const code = ProductCode ? ProductCode.trim().replace(/_/g, " ") : "";

  const productDetails = {
    descriptions: [
      "Silicone super spreader is a superior wetting agent, developed to improve the wetting , spreading and penetration of chemicals. FX SP100 silicon spreader reduces the surface tension to a very low level, resulting in a rapid wetting cum spreading on leaves . When incorporated in formulations, near complete coverage of leaf is achieved. The product facilitates uptake of chemicals into the plant tissue. It can also be used as an ingredient in pesticide formulations , or at times, as a tank mix adjuvant for foliar applied chemicals.",
      "Silicon super spreader is a specially formulated product possesing a low molecular weight non-ionic silicon polyether surfactant. FX SP100 Silicon spreader is a versatile product that helps enhance the performance of agriculture chemicals , especially the broadleaf herbicides, insecticides, fungicides and plant growth regulators that are water soluble.",
      "Silicone super spreader is extremely cost effective, as it is designed to work efficiently and economically.",
    ],
    features: [
      {
        featureTitle: "Package Size",
        featureDetails: "250ml",
      },
      {
        featureTitle: "Form",
        featureDetails: "Liquid",
      },
      {
        featureTitle: "Packaging Type",
        featureDetails: "Bottle",
      },
      {
        featureTitle: "Pack Type",
        featureDetails: "Vegetables",
      },
      {
        featureTitle: "Color",
        featureDetails: "White",
      },
      {
        featureTitle: "Usage",
        featureDetails: "Agriculture",
      },
      {
        featureTitle: "Brand",
        featureDetails: "Fenton",
      },
      {
        featureTitle: "Country of Origin",
        featureDetails: "India",
      },
      {
        featureTitle: "Min Order Quantity",
        featureDetails: "50 Liter",
      },
    ],
    generals: [
      {
        description: "Easy Dispersion in aqueous systems",
      },
      {
        description:
          "Greatly increases the uptake of chemicals into the plant tissue",
      },
      {
        description: 'Exhibits superior "Rain Fastness"',
      },
      {
        description:
          "Produces very rapid wetting and spreading on hard to wet surfaces such as waxy leaves.",
      },
      {
        description: "Chemically inert , non toxic",
      },
      {
        description: "Economical as it works as low ppm",
      },
      {
        description: "Dosage approx. 40 to 50 ml per 200 litres of water",
      },
    ],
    instructions: [
      "The quantity of FX SP100 Silicon Super Spreader will be dependent upon the application; however it is recommended that evaluations begin at 0.10% of the total formulation. (Final Formulations have been made with 0.15% to 0.35%) . To obtain a wider spread and better efficiency it is advisable for the concentration to be on the higher levels.",
    ],
    notes:
      "Fenton Chemicals liability is limited to the refund of product price or replacement of the product. Fenton Chemicals will not be responsible for incidental or consequential damages of any kind. It is the user''s responsibility to determine the suitability of use.",
  };

  const [selectedTab, setSelectedTab] = useState("Description");

  const [selectedImage, setSelectedImage] = useState(null);
  const [Singleproduct, SetSingleProduct] = useState(null);

  const [products, setProducts] = useState([]);
  const [videoId, setVideoId] = useState();

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
          const dataSet = response?.data;

          setCategories(dataSet.categories);
          setSubCategories(dataSet.subCategories);
          setProductsForForm(dataSet.products);
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

  const getEmbedUrl = (url) => {
    if (!url) return "";

    let videoId = "";

    // If it's a shortened YouTube link (youtu.be/VIDEO_ID)
    if (url.includes("youtu.be")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }
    // If it's a standard YouTube link (youtube.com/watch?v=VIDEO_ID)
    else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    }

    // Return the correct embed URL format
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  const getSingleProduct = () => {
    const config = {
      url:
        process.env.REACT_APP_BASE_URL +
        `api/getProductByparamas/${encodeURIComponent(
          name
        )}/${encodeURIComponent(code)}`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response?.data?.status);
        if (response?.data?.status == true) {
          const dataSet = response?.data?.data;
          console.log(dataSet);

          const embedUrl = getEmbedUrl(Singleproduct?.VideoGuides);

          // const videoId = videoIdMatch ? videoIdMatch[1] : null;
          setVideoId(embedUrl);
          SetSingleProduct(dataSet);
          setSelectedImage(dataSet?.Image[0]);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    getSingleProduct();
    getAllProductData();
    getAllProductDataOfSingleData();
  }, [ProductName]);

  const getAllProductDataOfSingleData = () => {
    const config = {
      url:
        process.env.REACT_APP_BASE_URL +
        `api/GetAllProductOfSameCategroy/${encodeURIComponent(
          name
        )}/${encodeURIComponent(code)}`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response?.data?.status);
        if (response?.data?.status == true) {
          const dataSet = response?.data;

          const randomProducts = dataSet.products
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);
          setProducts(randomProducts);
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

  // diolog from
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialog = (e) => {
    e.stopPropagation();
    setOpenDialog(!openDialog);
  };

  return (
    <div className="single-product">
      <h6 className="productName">
        Product / <span>{Singleproduct?.Name}</span>
      </h6>

      <hr className="hrline" />

      {!Singleproduct ? (
        // Skeleton for Images
        [...Array(3)].map((_, index) => (
          <Skeleton key={index} height={100} width={100} />
        ))
      ) : (
        <section className="top-section">
          <div className="carousel-container">
            <div className="All_Image">
              {Singleproduct?.Image.map((item, index) => (
                <div className="gallery-image">
                  <img
                    src={item}
                    key={index}
                    alt={`product-image-${index}`}
                    className="single-image"
                    onClick={() => setSelectedImage(item)}
                    style={{
                      cursor: "pointer",
                      border:
                        selectedImage === item
                          ? "2px solid var(--bg-secondary)"
                          : "none",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Main image */}
            <img
              src={selectedImage}
              alt="single-image"

              
              className="single-image"
            />
          </div>

          <div className="right-container">
            <div className="details-container">
              <p className="category">
                {Singleproduct?.Categories?.Name ||     
                  Singleproduct?.SubCategories?.Name}
              </p>   
              <h1 className="product-name mt-3">{Singleproduct?.Name}</h1>
              <h1 className="product-name code-name" style={{fontWeight:"500"}}>{Singleproduct?.ProductCode}</h1>
              <p className="about-product">
                {Singleproduct?.description?.split(" ").slice(0, 50).join(" ") +
                  (Singleproduct?.description?.split(" ").length > 50
                    ? "..."
                    : "")}
              </p>

              <div className="btn-container">
                <div
                  className="single-btn"
                  //  onClick={() => navigate("/contact")}
                  onClick={handleDialog}
                >
                  <ButtonPrimary
                    title={"Get a Call"}
                    bgColor={"var(--tertiary-linear-gradient)"}
                    borderRadius={"10px"}
                    paddingVertical={"15"}
                    className="batan"
                  />
                </div>

                <div
                  className="single-btn"
                  //  onClick={() => navigate("/contact")}
                >
                  <a
                    href="https://wa.me/919479854613?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonSecondary
                      title={"Let's Talk"}
                      borderRadius={"10px"}
                      paddingVertical={"15"}
                      className="batan"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="shadow"></div>
          </div>
          <div className="dialog-container">
            <DialogForm
              isOpen={openDialog}
              handleDialog={handleDialog}
              categories={categories}
              subCategories={subCategories}
              products={productsForForm}
            />
          </div>
        </section>
      )}

      <section className="description-container">
        <div className="all-tab-heading">
          <div className="tab-headings">
            {singleProductDescriptionTabs?.map(
              (item, index) =>
                (item?.title != "Video Guides" ||
                  (item?.title == "Video Guides" &&
                    Singleproduct?.VideoGuides)) && (
                  <p
                    className={`tab-title ${
                      item?.title === selectedTab && "active"
                    }`}
                    onClick={() => {
                      setSelectedTab(item?.title);
                    }}
                  >
                    {item?.title}
                  </p>
                )
            )}

            {/* {singleProductDescriptionTabs?.map((item, index) =>
              item?.title !== "Video Guides" ||
              (item?.title === "Video Guides" && Singleproduct?.VideoGuides) ? (
                <p
                  key={index}
                  className={`tab-title ${
                    item === selectedTab ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab(item?.title)}
                >
                  {item?.title}
                </p>
              ) : null
            )} */}
            <p className="mb-3 weight">50kG / 200kG</p>
          </div>

          {/* <div className="bottom-border"></div> */}
        </div>

        <div className="tab-details-container">
          {selectedTab === "Description" && (
            <div className="all-description-container">
              {Singleproduct?.description}
            </div>
          )}

          {selectedTab === "General & Features" && (
            <div className="features-and-generals">
              <div className="generals-section">
                <ul>
                  {Singleproduct?.General_Features?.map((item, index) => (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {selectedTab === "Instructions" && (
            <div className="instructions-container">
              <div className="instructions">
                {Singleproduct?.Instructions.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>

              <div className="notes">
                <p>{`Note: ` + productDetails.notes}</p>
              </div>
            </div>
          )}

          {selectedTab === "Video Guides" && Singleproduct?.VideoGuides && (
            <div className="all-description-container">
              <div className="video-container">
                <iframe
                  title="YouTube video player"
                  style={{ borderRadius: "10px" }}
                  src={videoId}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="related-products-container">
        <RelatedProducts products={products} />
      </div>

      <ToastContainer />
    </div>
  );
}

export default SingleProduct;
