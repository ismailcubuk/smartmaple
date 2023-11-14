import React from "react";

export default function LeftArrow({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        d="M10.8612 1.20709L4.22383 7.84446L10.8612 14.4818"
        stroke={color}
        stroke-width="1.2068"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
