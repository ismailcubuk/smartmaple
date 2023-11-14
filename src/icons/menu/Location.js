import React from "react";

export default function LocationIcon({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 40"
      fill="none"
    >
      <path
        d="M15 -1.92296e-05C6.71783 -1.92296e-05 -2.67029e-05 6.26998 -2.67029e-05 14C-2.67029e-05 24.5 15 40 15 40C15 40 30 24.5 30 14C30 6.26998 23.2821 -1.92296e-05 15 -1.92296e-05ZM15 19C12.0428 19 9.64283 16.76 9.64283 14C9.64283 11.24 12.0428 8.99998 15 8.99998C17.9571 8.99998 20.3571 11.24 20.3571 14C20.3571 16.76 17.9571 19 15 19Z"
        fill={color}
      />
    </svg>
  );
}
