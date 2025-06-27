import React from "react";
import "./ButtonSecondary.scss";

const ButtonSecondary = ({
  title,
  borderColor,
  textColor,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
}) => {
  return (
    <button
      className="secondary-btn"
      style={{
        borderColor: borderColor && borderColor,
        color: textColor && textColor,
        borderRadius: borderRadius && borderRadius,
        padding: `${paddingVertical || 7}px ${paddingHorizontal || 0}px`,
      }}
    >
      {title}
    </button>
  );
};

export default ButtonSecondary;
