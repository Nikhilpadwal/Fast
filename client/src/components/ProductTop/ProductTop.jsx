import React from "react";
import "./ProductTop.scss";
import reactangle from "../../assets/Product/Rectangle.png";
import leaf from "../../assets/Product/bleaf.png";

function ProductTop({ product }) {
  console.log("dddd", product);
  const words =
    product?.category?.split(" ") || product?.subcategory?.split(" ");

  console.log(words);
  const firstWord = words.slice(0, 1).join(" ");
  const remainingWords = words.slice(1).join(" ");

  return (
    <div className="ProductTop">
      <div className="Topsection1">
        <div className="leftInfo">
          <div className="head">
            <p>{product?.productTag}</p>

            <h3>
              {firstWord} <span> {remainingWords} </span>
            </h3>
          </div>

          <div className="texts">
            <p style={{ whiteSpace: "pre-line" }}>{product?.productDetails}</p>
          </div>
        </div>

        <div className="rightImg">
          <div className="imgbox">
            {/* <img className="leaf" src={leaf} alt="Leaf" /> */}
            <img className="leaf" src={product?.image} alt="Leaf" />
            <img className="rac" src={reactangle} alt="Rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTop;
