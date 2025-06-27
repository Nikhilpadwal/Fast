import React from "react";
import "./ProductList.scss";
import productImage from "../../assets/Product/image.png";
import Image from "../../assets/Product/kd.png";

const products = [
  {
    id: 1,
    name: "Neem Oil Emulsifier",
    description: "(DIKO ENO)",
    sizes: "50kgs | 200Kgs",
    imageUrl: productImage,
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    description: "(Bio Grow)",
    sizes: "10kgs | 25Kgs",
    imageUrl: productImage,
  },
  {
    id: 3,
    name: "Natural Pesticide",
    description: "(Eco Shield)",
    sizes: "5L | 20L",
    imageUrl: productImage,
  },
  {
    id: 3,
    name: "Natural Pesticide",
    description: "(Eco Shield)",
    sizes: "5L | 20L",
    imageUrl: productImage,
  },
];

function ProductList() {
  return (
    <div className="ProductListContainer">
      <div className="ProductDetailsTitle">
        <h2>
          Silicon Super <span>Spreaders</span>
        </h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          interdum interdum elit nec auctor. <br /> Vestibulum vitae iaculis
          erat, eu aliquam augue.
        </p> */}
      </div>
      <div className="ProductArray">
        {products.map((product) => (
          <div className="SingleProductDiv" key={product.id}>
            <div className="LeftProductDetails">
              <div className="TopProductDetials">
                <h2>{product.name}</h2>
                <p className="name">{product.description}</p>
                <p className="weight">{product.sizes}</p>
              </div>
              <div className="bottomProductButton">
                <button>View Details</button>
              </div>
            </div>
            <div className="RightProductDetails">
              <img src={product.imageUrl} alt={`${product.name} Image`} />
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr /> <hr />
      <div className="ProductArraynew">
        {products.map((product) => (
          <div className="SingleProductDiv" key={product.id}>
            <div className="RightProductDetails">
              <img src={Image} alt={`${product.name} Image`} />
            </div>
            <div className="LeftProductDetails">
              <div className="TopProductDetials">
                <h2>{product.name}</h2>
                <p className="name">{product.description}</p>
                <p className="weight">{product.sizes}</p>
              </div>
              <div className="bottomProductButton">
                <button>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
