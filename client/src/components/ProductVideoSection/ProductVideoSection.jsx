import React from "react";
import "./ProductVideoSection.scss";

import VideoCrowsel from "./VideoCrowsel/VideoCrowsel";

function ProductVideoSection({ subcategoriesDe }) {
  // Split the heading into first two words and the rest

  console.log(subcategoriesDe);
  const words =
    subcategoriesDe?.category?.split(" ") ||
    subcategoriesDe?.subcategory?.split(" ");
  const firstTwoWords = words?.slice(0, 2).join(" ");
  const remainingWords = words?.slice(2).join(" ");

  console.log(subcategoriesDe);

  const videoPart = subcategoriesDe?.videoLinks;

  console.log(videoPart);
  return (
    <section className="videoSection">
      {/* <div className="leftVideoSection">
        

        <p>{subcategoriesDe?.howToUse}</p>
      </div> */}

      {videoPart && (
        <div className="rightVideoSection">
          <h5>
            <span>{firstTwoWords} </span> {remainingWords}
          </h5>
          <div className="video-thumbnail">
            <VideoCrowsel videoLinks={videoPart} />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductVideoSection;
