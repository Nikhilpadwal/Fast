import React, { useState } from "react";
import "./SubCategory.scss";
import { useNavigate } from "react-router-dom";

function SubCategory({ agroProducts, product }) {
  const [popupData, setPopupData] = useState(null);

  const words =
    product?.category?.split(" ") || product?.subcategory?.split(" ");

  console.log(words);
  const firstWord = words.slice(0, 1).join(" ");
  const remainingWords = words.slice(1).join(" ");

  const handleGetQuoteClick = (product) => {
    setPopupData(product);
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };
  const navigate = useNavigate();

  if (!agroProducts || agroProducts.length === 0) {
    return <div></div>;
  }

  console.log(agroProducts);

  return (
    <section className="main-div">
      <div className="head">
        <div className="inner-head-1">
          <p className="first-part-heading">
            <span>{firstWord}</span> {remainingWords}
          </p>
        </div>

        <div className="inner-head-2">
          <p>
            Discover cutting-edge solutions designed to transform productivity
            and sustainability in every step of your journey. Our innovative
            products ensure efficiency, safety, and eco-conscious growth for
            your industry.
          </p>
        </div>
      </div>

      <div className="browse-category">
        <div className="category-list-container">
          <div className="all-products-list-container">
            <div className="top-product-list-container">
              <div className="ListOfProduct">
                {agroProducts.map((item, index) => (
                  <div
                    key={index}
                    className={`product-card shadow ${
                      item?.HotProduct ? "border-5 border-black" : ""
                    }`}
                    // onClick={(event) => {
                    //   const productName = item?.Name?.trim().replace(
                    //     /\s+/g,
                    //     "_"
                    //   );
                    //   const productCode = item?.ProductCode?.trim().replace(
                    //     /\s+/g,
                    //     "_"
                    //   );

                    //   const newTabUrl = productCode
                    //     ? `/product-details/${encodeURIComponent(
                    //         productName
                    //       )}/${encodeURIComponent(productCode)}`
                    //     : `/product-details/${encodeURIComponent(productName)}`;

                    //   if (
                    //     event.ctrlKey ||
                    //     event.metaKey ||
                    //     event.button === 1
                    //   ) {
                    //     window.open(newTabUrl, "_blank");
                    //   } else {
                    //     window.scrollTo({ top: 0, behavior: "smooth" });
                    //     navigate(newTabUrl);
                    //   }
                    // }}
                    onClick={(event) => {
                      let newTabUrl = "";
                      if (item?.Name === "Orthosilicic Acid 2% WSL") {
                        newTabUrl = "/Orthosilicic_Acid";
                      } else if (item?.Name === "Powder Silicon Spreader") {
                        newTabUrl = "/Fensil360";
                      } else if (
                        item?.Name === "pH Balancer (Multibalance 4 in 1)"
                      ) {
                        newTabUrl = "/MultiBalance4IN1";
                      } else {
                        const productName = item?.Name?.trim().replace(
                          /\s+/g,
                          "_"
                        );
                        const productCode = item?.ProductCode?.trim().replace(
                          /\s+/g,
                          "_"
                        );

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
                    <div className="product-info-container">
                      <div className="title-container">
                        <h3 className="product-title mb-1">{item?.Name}</h3>
                        <h3
                          className="product-title andcode "
                          style={{ fontSize: "13px" }}
                        >
                          {item?.ProductCode}
                        </h3>
                      </div>

                      <hr className="line" />
                    </div>

                    <div className="product-image-container">
                      <div className="product-image">
                        <img src={item?.Image[0]} alt={item?.Name} />
                      </div>
                    </div>

                    <div className="btn-container">
                      <button className="quote-button">
                        View Product Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {window.innerWidth > 100 && window.innerWidth <= 768 && (
          <div className="mobile-category-list-container">
            {agroProducts && agroProducts?.length > 0 && (
              <div className="item-list-container">
                {agroProducts?.map((item, index) => (
                  <div
                    className="product-card"
                    key={index}
                    // onClick={(event) => {
                    //   const productName = item?.Name?.trim().replace(
                    //     /\s+/g,
                    //     "_"
                    //   );
                    //   const productCode = item?.ProductCode?.trim().replace(
                    //     /\s+/g,
                    //     "_"
                    //   );

                    //   const newTabUrl = productCode
                    //     ? `/product-details/${encodeURIComponent(
                    //         productName
                    //       )}/${encodeURIComponent(productCode)}`
                    //     : `/product-details/${encodeURIComponent(productName)}`;

                    //   if (
                    //     event.ctrlKey ||
                    //     event.metaKey ||
                    //     event.button === 1
                    //   ) {
                    //     window.open(newTabUrl, "_blank");
                    //   } else {
                    //     window.scrollTo({ top: 0, behavior: "smooth" });
                    //     navigate(newTabUrl);
                    //   }
                    // }}
                    onClick={(event) => {
                      let newTabUrl = "";

                      if (item?.Name === "Powder Silicon Spreader") {
                        newTabUrl = "/Fensil360";
                      } else if (
                        item?.Name === "pH Balancer (Multibalance 4 in 1)"
                      ) {
                        newTabUrl = "/MultiBalance4IN1";
                      } else {
                        const productName = item?.Name?.trim().replace(
                          /\s+/g,
                          "_"
                        );
                        const productCode = item?.ProductCode?.trim().replace(
                          /\s+/g,
                          "_"
                        );

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
                    <div className="product-info-container">
                      <div className="title-container">
                        <h3 className="product-title">{item?.productName}</h3>
                      </div>

                      <hr className="line" />

                      <div className="content">
                        <p className="product-code">({item.productCode})</p>

                        <div className="quantities-container">
                          {item?.quantities?.map((quantity, index) => (
                            <>
                              <p className="quantity">{quantity}</p>
                              {index < item.quantities.length - 1 && (
                                <span className="separator">|</span>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="product-image-container">
                      <div className="product-image">
                        <img src={item?.productImage} alt={item.title} />
                      </div>
                    </div>

                    <div
                      className="btn-container"
                      // onClick={() => handleGetQuoteClick(item)}
                    >
                      <button className="quote-button">
                        View Product Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Popup modal */}
      {popupData && (
        <div className="popup-overlay " onClick={handleClosePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>
              &times;
            </button>

            <div className="popup-card-main">
              <div className="popup-image">
                <img src={popupData?.Image[0]} alt={popupData?.Name} />
              </div>

              <div className="popup-text">
                <div className="top-popup-section">
                  <p className="popup-card-title">{popupData?.Name}</p>
                  <div className="popup-code-main">
                    {popupData?.ProductCode && (
                      <span className="popup-code1">
                        ({popupData.ProductCode})
                      </span>
                    )}

                    <div className="quantities-container">
                      <p className="quantity">{"50 Kg | 200 Kg"}</p>
                    </div>
                  </div>
                  <p className="popup-description">{popupData?.description}</p>
                </div>

                <button
                  className="read-more-button"
                  // onClick={(event) => {
                  //   const productName = product?.Name?.trim().replace(
                  //     /\s+/g,
                  //     "_"
                  //   );
                  //   const productCode = product?.ProductCode?.trim().replace(
                  //     /\s+/g,
                  //     "_"
                  //   );

                  //   const newTabUrl = productCode
                  //     ? `/product-details/${encodeURIComponent(
                  //         productName
                  //       )}/${encodeURIComponent(productCode)}`
                  //     : `/product-details/${encodeURIComponent(productName)}`;

                  //   if (event.ctrlKey || event.metaKey || event.button === 1) {
                  //     window.open(newTabUrl, "_blank");
                  //   } else {
                  //     window.scrollTo({ top: 0, behavior: "smooth" });
                  //     navigate(newTabUrl);
                  //   }
                  // }}
                  onClick={(event) => {
                    let newTabUrl = "";

                    if (product?.Name === "Powder Silicon Spreader") {
                      newTabUrl = "/Fensil360";
                    } else if (
                      product?.Name === "pH Balancer (Multibalance 4 in 1)"
                    ) {
                      newTabUrl = "/MultiBalance4IN1";
                    } else {
                      const productName = product?.Name?.trim().replace(
                        /\s+/g,
                        "_"
                      );
                      const productCode = product?.ProductCode?.trim().replace(
                        /\s+/g,
                        "_"
                      );

                      newTabUrl = productCode
                        ? `/product-details/${encodeURIComponent(
                            productName
                          )}/${encodeURIComponent(productCode)}`
                        : `/product-details/${encodeURIComponent(productName)}`;
                    }

                    if (event.ctrlKey || event.metaKey || event.button === 1) {
                      window.open(newTabUrl, "_blank");
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate(newTabUrl);
                    }
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default SubCategory;
