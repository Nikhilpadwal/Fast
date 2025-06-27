import * as React from "react";

const DownArrowIcon = (size, ...props) => (
  <svg
    xmlSpace="preserve"
    width={size.width}
    height={size.height}
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M488.726 139.637H23.273a23.27 23.27 0 0 0-21.96 15.569 23.275 23.275 0 0 0 7.422 25.876l232.733 186.181a23.238 23.238 0 0 0 14.538 5.1c5.143 0 10.29-1.7 14.538-5.1l232.72-186.181a23.267 23.267 0 0 0 7.422-25.876 23.27 23.27 0 0 0-21.96-15.569z"
      style={{
        fill: size.color,
      }}
    />
  </svg>
);

export default DownArrowIcon;
