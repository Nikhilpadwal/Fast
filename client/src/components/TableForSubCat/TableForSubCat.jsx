import React from "react";
import "./TableForSubCat.scss";

function TableForSubCat({ Product, product }) {
  const data = [
    {
      activeToxicant: "Alphacypermethrin 5 & 10% EC",
      emulsifierPair: "SHREEMUL 35 : SHREEMUL 70",
      ratio: "60:40",
      dosage: "7%",
    },
    {
      activeToxicant: "Abamectin - 18% EC",
      emulsifierPair: "SHREEMUL 45 : SHREEMUL 90",
      ratio: "60:40",
      dosage: "6%",
    },
    {
      activeToxicant: "Chlorpyriphos 20% EC",
      emulsifierPair: "SHREEMUL 35 : SHREEMUL 70",
      ratio: "30:70",
      dosage: "5%",
    },
  ];

  const words =
    product?.category?.split(" ") || product?.subcategory?.split(" ");

  console.log(words);
  const firstWord = words.slice(0, 1).join(" ");
  const remainingWords = words.slice(1).join(" ");

  console.log(Product);
  return (
    <div className="table-container">
      <div className="head">
        <div className="inner-head-1">
          <h3 className="first-part-heading">
            <span>{firstWord}</span> {remainingWords}
          </h3>
        </div>

        <div className="inner-head-2">
          <p className="mb-2  ">
            Discover cutting-edge solutions designed to transform productivity
            and sustainability in every step of your journey. Our innovative
            products ensure efficiency, safety, and eco-conscious growth for
            your industry.
          </p>
        </div>
      </div>
      <div className="Emt-table">
        <table className="emulsifier-table">
          <thead>
            <tr>
              <th>FORMULATION</th>
              <th>RECOMMENDED ADJUVANT</th>
              <th>DOSAGE</th>
            </tr>
          </thead>
          <tbody>
            {Product.map((item, index) => (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Recommended_Adjuvant}</td>
                <td>{item.Dosage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableForSubCat;
