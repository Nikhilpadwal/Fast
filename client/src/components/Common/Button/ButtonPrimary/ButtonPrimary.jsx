import React from "react";
import "./ButtonPrimary.scss";

const ButtonPrimary = ({
  title,
  bgColor,
  textColor,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
}) => {
  return (
    <button
      className="primary-btn"
      style={{
        background: bgColor && bgColor,
        color: textColor && textColor,
        borderRadius: borderRadius && borderRadius,
        padding: `${paddingVertical || 7}px ${paddingHorizontal || 0}px`,
      }}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
