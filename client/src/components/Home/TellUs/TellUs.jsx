import React, { useEffect, useState } from "react";
import "./TellUs.scss";
import DownArrowIcon from "../../../assets/svgs/DownArrowIcon";
import SearchIcon from "../../../assets/svgs/SearchIcon";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const unwantedSubCategories = [
  "Emulsifier for EC",
  "Nitrobenzene Emulsifier",
  "Surfactant For SC",
  "Surfactant For WP",
  "Adjuvant For SL",
  "Conventional Emulsifier",
];

const TellUs = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productData, setproducts] = useState();
  const [SingleProduct, setSingleProduct] = useState();

  const navigate = useNavigate();

  const getAllProductData = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/GetAllProduct`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status === true) {
          const dataSet = response?.data;
          setproducts(dataSet.products);
          setCategories(dataSet.categories);
          const filteredSubCategories = dataSet.subCategories.filter(
            (subcategory) => !unwantedSubCategories.includes(subcategory.Name)
          );
          setSubCategories(filteredSubCategories);
          setProducts(dataSet.products);
        } else {
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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    const relatedProducts = products.filter(
      (product) =>
        product.Categories?._id === categoryId ||
        product.SubCategories?._id === categoryId
    );
    setSingleProduct(relatedProducts[0]);
    setFilteredProducts(relatedProducts);
  };

  const handleSubProduct = (categoryId) => {
    productData.map((item) => {
      if (item._id === categoryId) {
        setSingleProduct(item);
        return;
      }
      return item;
    });
  };

  const handleSearch = (event) => {
    if (!selectedCategory) {
      toast.warning("Please select a category first.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    let newTabUrl = "";

    if (SingleProduct?.Name === "Orthosilicic Acid 2% WSL") {
      newTabUrl = "/Orthosilicic_Acid";
    } else if (SingleProduct?.Name === "Powder Silicon Spreader") {
      newTabUrl = "/Fensil360";
    } else if (SingleProduct?.Name === "pH Balancer (Multibalance 4 in 1)") {
      newTabUrl = "/MultiBalance4IN1";
    } else {
      const productName = SingleProduct?.Name?.trim().replace(/\s+/g, "_");
      const productCode = SingleProduct?.ProductCode?.trim().replace(
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
  };

  return (
    <div className="tell-container">
      <div className="tell-us">
        <div className="left-container">
          <h1 className="heading">Tell us...</h1>
          <h1 className="subheading">
            What's in your{" "}
            <span className="primary-gradient-background">mind</span>?
          </h1>
        </div>

        <div className="right-container">
          <div className="search-box">
            <select
              value={selectedCategory || ""}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="input-box form-select border-0"
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
            <span
              className="position-absolute"
              style={{ pointerEvents: "none" }}
            >
              ▼
            </span>
          </div>

          <div className="search-box">
            <select
              className="input-box form-select border-0 pe-5"
              onChange={(e) => handleSubProduct(e.target.value)}
            >
              <option value="" disabled>
                Select the Product
              </option>
              {filteredProducts.map((product) => (
                <option key={product._id} value={product._id}>
                  {product?.Name +
                    (product?.ProductCode ? ` (${product.ProductCode})` : "")}
                </option>
              ))}
            </select>
            <span
              className="position-absolute"
              style={{ pointerEvents: "none" }}
            >
              ▼
            </span>
          </div>

          <div
            className={`search-icon-container ${
              !selectedCategory ? "disabled" : ""
            }`}
            onClick={handleSearch}
          >
            <SearchIcon width={30} height={30} color={"var(--text-primary)"} />
          </div>
        </div>

        <div className="search-btn">
          <p
            className={`search-text ${!selectedCategory ? "disabled" : ""}`}
            onClick={handleSearch}
          >
            Search
          </p>
        </div>

        <div className="overlay"></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TellUs;

// import React, { useEffect, useState } from "react";
// import "./TellUs.scss";
// import DownArrowIcon from "../../../assets/svgs/DownArrowIcon";
// import SearchIcon from "../../../assets/svgs/SearchIcon";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const unwantedSubCategories = [
//   "Emulsifier for EC",
//   "Nitrobenzene Emulsifier",
//   "Surfactant For SC",
//   "Surfactant For WP",
//   "Adjuvant For SL",
//   "Conventional Emulsifier",
// ];

// const TellUs = () => {
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [productData, setproducts] = useState();

//   const [SingleProduct, setSingleProduct] = useState();

//   const getAllProductData = () => {
//     const config = {
//       url: process.env.REACT_APP_BASE_URL + `api/GetAllProduct`,
//       method: "get",
//     };

//     axios
//       .request(config)
//       .then((response) => {
//         console.log(response?.data?.status);
//         if (response?.data?.status == true) {
//           const dataSet = response?.data;
//           setproducts(dataSet.products);
//           setCategories(dataSet.categories);
//           const filteredSubCategories = dataSet.subCategories.filter(
//             (subcategory) => !unwantedSubCategories.includes(subcategory.Name)
//           );

//           // Update the state with the filtered list
//           setSubCategories(filteredSubCategories);
//           setProducts(dataSet.products);
//         }
//         if (response?.data?.status == false) {
//           toast.error(response?.data?.message, {
//             position: "bottom-right",
//             autoClose: 4000,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "light",
//           });
//         }
//       })
//       .catch((error) => {
//         toast.error(error?.response?.data?.message, {
//           position: "bottom-right",
//           autoClose: 4000,
//           pauseOnHover: true,
//           draggable: true,
//           theme: "light",
//         });
//       });
//   };

//   useEffect(() => {
//     getAllProductData();
//   }, []);

//   const handleCategoryChange = (categoryId) => {
//     console.log(categoryId);
//     setSelectedCategory(categoryId);
//     console.log(products);
//     const relatedProducts = products.filter(
//       (product) =>
//         product.Categories?._id == categoryId ||
//         product.SubCategories?._id == categoryId
//     );

//     setSingleProduct(relatedProducts[0]);
//     console.log(relatedProducts);
//     setFilteredProducts(relatedProducts);
//   };

//   const handleSubProduct = (categoryId) => {
//     productData.map((item) => {
//       console.log(item?._id, categoryId);
//       if (item._id === categoryId) {
//         setSingleProduct(item);
//         console.log(item);
//         return;
//       }
//       return item;
//     });
//   };

//   const navigate = useNavigate();
//   return (
//     <div className="tell-container">
//       <div className="tell-us">
//         <div className="left-container">
//           <h1 className="heading">Tell us...</h1>
//           <h1 className="subheading">
//             What's in your{" "}
//             <span className="primary-gradient-background">mind</span>?
//           </h1>
//         </div>

//         <div className="right-container">
//           <div className="search-box">
//             <select
//               value={selectedCategory || ""}
//               onChange={(e) => handleCategoryChange(e.target.value)}
//               className="input-box form-select border-0"
//             >
//               <option value="" disabled>
//                 Select the Category
//               </option>
//               {categories.map((cat) => (
//                 <option
//                   className="option"
//                   key={cat._id}
//                   value={cat._id}
//                   style={{ color: " black" }}
//                 >
//                   {cat.Name}
//                 </option>
//               ))}
//               {subCategories.map((subCat) => (
//                 <option
//                   style={{ color: " black" }}
//                   key={subCat._id}
//                   value={subCat._id}
//                 >
//                   {subCat.Name}
//                 </option>
//               ))}
//             </select>
//             <span
//               className="position-absolute  "
//               style={{ pointerEvents: "none" }}
//             >
//           ▼
//             </span>
//           </div>

//           <div className="search-box">
//             <select
//               className="input-box form-select border-0  pe-5"
//               onChange={(e) => handleSubProduct(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select the Product
//               </option>
//               {filteredProducts.map((product) => (
//                 <option key={product._id} value={product._id}>
//                   {product?.Name +
//                     (product?.ProductCode ? ` (${product.ProductCode})` : "")}
//                 </option>
//               ))}
//             </select>
//             <span
//               className="position-absolute  "
//               style={{ pointerEvents: "none" }}
//             >
//           ▼
//             </span>
//           </div>

//           <div
//             className="search-icon-container"
//             onClick={(event) => {
//               let newTabUrl = "";

//               console.log(SingleProduct?.Name);
//               if (SingleProduct?.Name === "Powder Silicon Spreader") {
//                 newTabUrl = "/Fensil360";
//               } else if (
//                 SingleProduct?.Name === "pH Balancer (Multibalance 4 in 1)"
//               ) {
//                 newTabUrl = "/MultiBalance4IN1";
//               } else {
//                 const productName = SingleProduct?.Name?.trim().replace(
//                   /\s+/g,
//                   "_"
//                 );
//                 const productCode = SingleProduct?.ProductCode?.trim().replace(
//                   /\s+/g,
//                   "_"
//                 );

//                 newTabUrl = productCode
//                   ? `/product-details/${encodeURIComponent(
//                       productName
//                     )}/${encodeURIComponent(productCode)}`
//                   : `/product-details/${encodeURIComponent(productName)}`;
//               }

//               if (event.ctrlKey || event.metaKey || event.button === 1) {
//                 window.open(newTabUrl, "_blank");
//               } else {
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//                 navigate(newTabUrl);
//               }
//             }}
//           >
//             <SearchIcon width={30} height={30} color={"var(--text-primary)"} />
//           </div>
//         </div>

//         <div className="search-btn">
//           <p className="search-text"
//            onClick={(event) => {
//             let newTabUrl = "";

//             console.log(SingleProduct?.Name);
//             if (SingleProduct?.Name === "Powder Silicon Spreader") {
//               newTabUrl = "/Fensil360";
//             } else if (
//               SingleProduct?.Name === "pH Balancer (Multibalance 4 in 1)"
//             ) {
//               newTabUrl = "/MultiBalance4IN1";
//             } else {
//               const productName = SingleProduct?.Name?.trim().replace(
//                 /\s+/g,
//                 "_"
//               );
//               const productCode = SingleProduct?.ProductCode?.trim().replace(
//                 /\s+/g,
//                 "_"
//               );

//               newTabUrl = productCode
//                 ? `/product-details/${encodeURIComponent(
//                     productName
//                   )}/${encodeURIComponent(productCode)}`
//                 : `/product-details/${encodeURIComponent(productName)}`;
//             }

//             if (event.ctrlKey || event.metaKey || event.button === 1) {
//               window.open(newTabUrl, "_blank");
//             } else {
//               window.scrollTo({ top: 0, behavior: "smooth" });
//               navigate(newTabUrl);
//             }
//           }}>Search </p>
//         </div>

//         <div className="overlay"></div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default TellUs;
