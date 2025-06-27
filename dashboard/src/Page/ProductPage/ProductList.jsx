// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const getAllProductData = () => {
//     const config = {
//       url: process.env.REACT_APP_BASE_URL + `api/GetAllProductForDashboard`,
//       method: "get",
//     };

//     axios
//       .request(config)
//       .then((response) => {
//         console.log(response?.data?.status);
//         if (response?.data?.status == true) {
//           const dataSet = response?.data;
//           console.log(dataSet?.products);
//           setProducts(dataSet?.products);
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

//   const handleDelete = async (id) => {
//     await axios.delete(`/api/products/${id}`);
//     setProducts(products.filter((product) => product._id !== id));
//   };

//   return (
//     <div className="">
//       <h2 className="text-center fw-bold mt-2"> Product List</h2>
//       <div className="text-end">

//       <Link to="/CreateProduct"  className="btn btn-success m-4 ">Create New Product</Link>
//       </div>
//       <table>
//         <thead  className="p-4">
//           <tr className="bg-success border" style={{height:"60px"}}>
//             <th className="border p-2">No.</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Product Code</th>
//             <th className="border p-2">Dosage</th>
//             <th className="border p-2">Category / Subcategory</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="mt-1">
//           {products?.map((product, num) => (
//             <tr key={product._id} className="border" >
//               <td className="border">{num+1}.</td>
//               <td className="border p-2"> {product.Name}</td>
//               <td className="border p-2">{product.ProductCode}</td>
//               <td className="border p-2">{product.Dosage}</td>
//               <td className="border p-2">
//                 {product.Categories
//                   ? product.Categories?.Name
//                   : product.SubCategories?.Name}
//               </td>
//               <td className="border p-2">
//                 <button className="btn btn-primary mx-2 rounded border"><Link className="text-white" to={`/EditProduct/${product._id}`}>Edit</Link></button>
//                 <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProductList;

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductList.scss"

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllProductData = () => {
    const config = {
      url: process.env.REACT_APP_BASE_URL + `api/GetAllProductForDashboard`,
      method: "get",
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.status === true) {
          const dataSet = response?.data;
          setProducts(dataSet?.products);
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

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    setProducts(products.filter((product) => product._id !== id));
  };

  const filteredProducts = products.filter(
    (product) =>
      product?.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product?.ProductCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product?.Dosage?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product?.Categories?.Name?.toLowerCase().includes(
        searchTerm.toLowerCase()
      ) ||
      product?.SubCategories?.Name?.toLowerCase().includes(
        searchTerm.toLowerCase()
      )
  );

  return (
    <div>
      <h2 className="text-center fw-bold mt-2">Product List</h2>

      <div className="text-end m-4">
        <input
          type="text"
          placeholder="Search Product"
          className="form-control d-inline-block w-25 me-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Link to="/CreateProduct" className="btn btn-success">
          Create New Product
        </Link>
      </div>

      <table>
        <thead className="p-4">
          <tr className="bg-success border" style={{ height: "60px" }}>
            <th className="border p-2">No.</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Product Code</th>
            <th className="border p-2">Dosage</th>
            <th className="border p-2">Category / Subcategory</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody className="mt-1">
          {filteredProducts?.map((product, num) => (
            <tr key={product._id} className="border">
              <td className="border p-2">{num + 1}.</td>
              <td className="border p-2">{product.Name}</td>
              <td className="border p-2">{product.ProductCode}</td>
              <td className="border p-2">{product.Dosage}</td>
              <td className="border p-2">
                {product.Categories
                  ? product.Categories?.Name
                  : product.SubCategories?.Name}
              </td>
              <td className="border p-2">
                <button className="btn btn-primary mx-2 rounded border">
                  <Link
                    className="text-white"
                    to={`/EditProduct/${product._id}`}
                  >
                    Edit
                  </Link>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer />
    </div>
  );
};

export default ProductList;
