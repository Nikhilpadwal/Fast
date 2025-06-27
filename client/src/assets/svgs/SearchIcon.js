import * as React from "react";

const SearchIcon = (size, ...props) => (
  <svg
    width={size.width}
    height={size.height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={size.color}
      fillRule="evenodd"
      d="M11.223 2.464a8.744 8.744 0 1 0 5.413 15.611l3.757 3.757a1.028 1.028 0 0 0 1.455-1.454L18.09 16.62a8.743 8.743 0 0 0-6.868-14.157Zm-6.686 8.744a6.686 6.686 0 1 1 13.373 0 6.686 6.686 0 0 1-13.373 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SearchIcon;
