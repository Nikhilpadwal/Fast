import React from "react";
import "./MultiBalance.scss";
import a from "../../assets/images/ortho/a.jpeg";
import b from "../../assets/images/ortho/b.jpg";

const MultiBalance = () => {
  return (
    <div className="ph-container">
      <div className="headsection">
        <h1 className="title">MULTI BALANCE 4 IN 1</h1>
        <p className="subtitle">
          (pH Balancer • Water Softener • Penetrator • Indicator)
        </p>
      </div>

      <section>
        <h2>Why Do You Require pH Balancer ?</h2>
        <p>
          When the pH of water exceeds 7, hydroxyl ions (OH-) increase and can
          break down chemical bonds. This weakens the performance of pesticides
          like herbicides, insecticides, fungicides, and growth regulators. High
          dissolved salts also keep water buffered at high pH, harming chemical
          effectiveness. Our pH Balancer neutralizes these salts, softens the
          water, and reduces phytoxicity problems.
        </p>
      </section>
      <div className="mai-parent">
        <section>
          <h2 className="z-3">Advantages / Benefits</h2>
          <ul>
            <li>Biodegradable spray adjuvant with pH  indicator</li>
            <li>Reduces salinity of soil</li>
            <li>Reduces pH of the water to the optimum level desired.</li>
            <li>Acts as a acidifier cum water hardness reducer.</li>
            <li>
              It is a new generation pH balancer which enhances chelating
              property of fertilizers micronutrients during spray.
            </li>
            <li>It never retains any stains over applied areas of plants.</li>
            <li>
              It is compatible with all types of chemicals and organic inputs.
            </li>
            <li>It is a good water hardness stabilizer</li>
            <li>
              Improves cuticular penetration and uptake of systemic pesticides.
              Color changes to light yellow (pH 6.0) and dark yellow (pH 5.0) to
              light pink (pH 4.0) helps farmer to understand pH value without
              using pH Paper
            </li>
          </ul>
        </section>

        <section>
          <h2>DOSAGE DEPENDS ON THE pH OF WATER </h2>
          <p className="mx-3">
            If pH between 7 to 8-Add 0.5 ml to 0.7 ml per Itr of water. <br />
            If pH above 8 - Add 0.7 ml to 1 ml per ltr of water.
          </p>
          <ul>
            <li>
              Add pH Balancer till the color of water is light yellow which
              indicates optimum pH of 6.
            </li>
            <li>
              To reduce the pH to 5. add pH Balancer till the color of wateris
              dark yellow.
            </li>
            <li>
              To reduce the pH to below 5. add pH balancer till the color of
              water becomes light pink to dark pink in color.
            </li>
          </ul>
        </section>
      </div>
      <div className="img-sec d-flex justify-content-around mt-5">
        <div className="img-c">
          <img src={a} alt="" />
          <p className="mt-2">
            Water colour changes from clear to <br /> yellow at optimum pH
            5-6.5"{" "}
          </p>
        </div>
        <div className="img-c">
          <img src={b} alt="" />
          <p className="mt-2">Agriculture ph Balancer Multibalance 4 in 1 </p>
        </div>
      </div>
    </div>
  );
};

export default MultiBalance;
