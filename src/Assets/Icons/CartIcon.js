import React from "react";

const CartIcon = ({ cc }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={cc ? cc : "#BBB"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1.667L2.5 5v11.667a1.667 1.667 0 001.667 1.666h11.666a1.667 1.667 0 001.667-1.666V5L15 1.667H5zM2.5 5h15M13.333 8.333a3.334 3.334 0 01-6.666 0"
      ></path>
    </svg>
  );
};

export default CartIcon;
