import * as React from "react";

const UpArrowIcon = (size, ...props) => (
  <svg
    xmlSpace="preserve"
    width={size.width}
    height={size.height}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M503.265 330.918 270.532 144.737c-8.501-6.8-20.579-6.8-29.075 0L8.736 330.918a23.267 23.267 0 0 0-7.422 25.876 23.272 23.272 0 0 0 21.96 15.569h465.453a23.273 23.273 0 0 0 14.538-41.445z"
      style={{
        fill: size.color,
      }}
    />
  </svg>
);

export default UpArrowIcon;
