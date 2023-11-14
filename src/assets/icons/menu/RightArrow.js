import React from "react";

export default function RightArrow({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 9 15"
      fill="none"
    >
      <path
        d="M1 14.2747L7.63737 7.63735L1 0.999982"
        stroke={color}
        stroke-width="1.2068"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
