import React, { useEffect, useRef, useState } from "react";
import "./products.scss";
import ProductTop from "../../components/ProductTop/ProductTop";
import ProductBenefits from "../../components/ProductBenefits/ProductBenefits";
import ProductVideoSection from "../../components/ProductVideoSection/ProductVideoSection";
import Contact from "../../components/Contact/Contact";
import SubCategory from "../../components/SubCategory/SubCategory";

import img1 from "../../assets/Product/singleleaf.png";
import img2 from "../../assets/Product/whitebg.png";
import img3 from "../../assets/Product/whiteline.png";

import { FaRegCompass } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BiSolidFlask } from "react-icons/bi";
import { PiVideoCameraBold } from "react-icons/pi";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllDataInOnePage from "../../components/AllDataInOnePage/AllDataInOnePage";
import TableForSubCat from "../../components/TableForSubCat/TableForSubCat";
import CheckoutForAll from "../../components/CheckoutForAll/CheckoutForAll";
import SuspensionConcentrates from "../../components/AllSubCategorys/SuspensionConcentrates/SuspensionConcentrates";
import NitrobenzeneEmulsifier from "../../components/AllSubCategorys/NitrobenzeneEmulsifier/NitrobenzeneEmulsifier";
import WettablePowders from "../../components/AllSubCategorys/WettablePowders/WettablePowders";
import SiliconAgrochemicals from "../../components/AllSubCategorys/SiliconAgrochemicals/SiliconAgrochemicals";
import BotanicalProducts from "../../components/AllSubCategorys/BotanicalProducts/BotanicalProducts";
import EssentialOilsProduct from "../../components/AllSubCategorys/EssentialOilsProduct/EssentialOilsProduct";
import EmulsifiersProduct from "../../components/AllSubCategorys/EmulsifiersProduct/EmulsifiersProduct";
import PlantGrowth from "../../components/AllSubCategorys/PlantGrowth/PlantGrowth";
import EmulsifiersForEC from "../../components/AllSubCategorys/EmulsifiersForEC/EmulsifiersForEC";
import AdjuvantForSL from "../../components/AllSubCategorys/AdjuvantForSL/AdjuvantForSL";
import OilEmulsifier from "../../components/AllSubCategorys/OilEmulsifier/OilEmulsifier";
import OrthoTable from "../../components/OrthoTable/OrthoTable";
import OtherCategory from "../../components/OtherCategori/OtherCategory ";

function Products() {
  const { name, value } = useParams();

  const location = useLocation();
  const { subcategories } = location.state || {};

  console.log(subcategories);

  const [Product, setProduct] = useState([]);

  const getAllProductHere = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/getAllProductByCategory`,
      method: "post",
      data: { category: name?.replace(/_/g, " "), value: value },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response?.data?.status);
        if (response?.data?.status == true) {
          const dataSet = response?.data?.data;

          setProduct(dataSet);
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

  const subCategoryRef = useRef(null);

  const handleScrollToSubCategory = () => {
    if (subCategoryRef.current) {
      subCategoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("SubCategory ref is null");
    }
  };

  const OverViewRef = useRef(null);
  const WhyUsRef = useRef(null);
  const HowTouseRef = useRef(null);
  //done
  const handleScrollToOverViewRef = () => {
    if (OverViewRef.current) {
      OverViewRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("SubCategory ref is null");
    }
  };

  const handleScrollToWhyUsRef = () => {
    if (WhyUsRef.current) {
      WhyUsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("SubCategory ref is null");
    }
  };

  const handleScrollToHowTouseRef = () => {
    if (HowTouseRef.current) {
      HowTouseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.error("SubCategory ref is null");
    }
  };

  useEffect(() => {
    console.log("hhllo hosdkl fl l f");
    getAllProductHere();
  }, []);

  return (
    <div className="mainProductContiner">
      <div
        className="product-section1"
        style={{
          backgroundImage: `url(${
            subcategories?.big197
              ? subcategories.big197
              : require("../../assets/Product/plantimg.png")
          })`,
        }}
      >
        <div className="imgSection">
          <div className="left-section">
            <p>Fenton Chemical's</p>
            <h1 className="product-name">
              {subcategories?.category || subcategories?.subcategory}
            </h1>
            <div
              className="jump-btn-container"
              onClick={handleScrollToSubCategory}
            >
              <p>Jump to Product</p>
            </div>
          </div>
          <div className="right-section">
            <img className="leaf" src={subcategories?.small11 || img1} alt="" />
            <img className="whitebg" src={img2} alt="" />
            <img className="line" src={img3} alt="" />

            <div className="left-btn-section">
              <div
                className="btn-container"
                onClick={handleScrollToOverViewRef}
              >
                <p>Overview</p>
                <FaRegCompass size={"1.3rem"} />
              </div>

              <div className="btn-container" onClick={handleScrollToWhyUsRef}>
                <p>Why us</p>
                <FaRegQuestionCircle size={"1.3rem"} />
              </div>

              <div
                className="btn-container"
                onClick={handleScrollToSubCategory}
              >
                <p>Product</p>
                <BiSolidFlask size={"1.3rem"} />
              </div>

              <div
                className="btn-container"
                onClick={handleScrollToHowTouseRef}
              >
                <p>How to</p>
                <PiVideoCameraBold size={"1.3rem"} />
              </div>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </div>

      <div ref={OverViewRef}>
        <ProductTop product={subcategories} />
      </div>

      <div ref={WhyUsRef}>
        {subcategories?.categoryWiseTable == 0 ? (
          <ProductBenefits benefits={subcategories?.benefits} />
        ) : subcategories?.categoryWiseTable == 1 ? (
          <>
            <EmulsifiersForEC />
            <OrthoTable />
          </>
        ) : subcategories?.categoryWiseTable == 2 ? (
          <AdjuvantForSL />
        ) : subcategories?.categoryWiseTable == 3 ? (
          <OilEmulsifier />
        ) : subcategories?.categoryWiseTable == 4 ? (
          <SuspensionConcentrates />
        ) : subcategories?.categoryWiseTable == 5 ? (
          <NitrobenzeneEmulsifier />
        ) : subcategories?.categoryWiseTable == 6 ? (
          <WettablePowders />
        ) : subcategories?.categoryWiseTable == 7 ? (
          <PlantGrowth />
        ) : subcategories?.categoryWiseTable == 8 ? (
          <SiliconAgrochemicals />
        ) : subcategories?.categoryWiseTable == 9 ? (
          <BotanicalProducts />
        ) : subcategories?.categoryWiseTable == 10 ? (
          <EssentialOilsProduct />
        ) : subcategories?.categoryWiseTable == 11 ? (
          <EmulsifiersProduct />
        ) : subcategories?.categoryWiseTable == 19 ? (
          <OtherCategory />
        ) : (
          <ProductBenefits benefits={subcategories?.benefits} />
        )}
      </div>

      <div ref={subCategoryRef}>
        {subcategories?.tableForm == 0 ? (
          <SubCategory agroProducts={Product} product={subcategories} />
        ) : subcategories?.tableForm == 1 ? (
          <TableForSubCat Product={Product} product={subcategories} />
        ) : subcategories?.tableForm == 5 ? (
          <AllDataInOnePage Product={Product} product={subcategories} />
        ) : subcategories?.tableForm == 13 ? (
          <CheckoutForAll Product={Product} product={subcategories} />
        ) : (
          <SubCategory agroProducts={Product} product={subcategories} />
        )}
      </div>

      <div ref={HowTouseRef}>
        <ProductVideoSection subcategoriesDe={subcategories} />
      </div>
      <Contact />

      <ToastContainer />
    </div>
  );
}

export default Products;
