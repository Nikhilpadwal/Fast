import * as React from "react";

const MenuIcon = (size, ...props) => (
  <svg width={size.width} height={size.height} viewBox="0 0 25 25" {...props}>
    <path
      stroke={size.color}
      strokeOpacity={0.65}
      strokeWidth={2}
      fill="none"
      d="M2.688 11.125a.938.938 0 0 1-.938-.938V2.69a.937.937 0 0 1 .938-.937h7.5a.937.937 0 0 1 .937.937v7.498a.938.938 0 0 1-.938.938h-7.5Zm13.124 0a.938.938 0 0 1-.937-.938V2.69a.938.938 0 0 1 .938-.937h7.498a.937.937 0 0 1 .937.937v7.498a.937.937 0 0 1-.937.938h-7.498ZM2.688 24.25a.938.938 0 0 1-.938-.938v-7.5a.938.938 0 0 1 .938-.937h7.5a.937.937 0 0 1 .937.938v7.5a.938.938 0 0 1-.938.937h-7.5Zm13.124 0a.938.938 0 0 1-.937-.938v-7.5a.938.938 0 0 1 .938-.937h7.498a.937.937 0 0 1 .937.938v7.5a.937.937 0 0 1-.937.937h-7.498Z"
    />
  </svg>
);

export default MenuIcon;
