import React from "react";

export default function NightCloudy({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 17"
      fill="none"
    >
      <g clipPath="url(#clip0_8_435)">
        <path
          d="M4.1904 10.0237C4.04072 10.0764 3.89885 10.1456 3.76697 10.2292C3.17992 9.98631 2.63005 9.62496 2.1535 9.14513C0.218366 7.21653 0.218366 4.08131 2.1535 2.15271C2.35146 1.95491 2.55933 1.77688 2.78204 1.61864C3.15323 1.35654 3.73723 1.79666 3.69764 2.20711C3.56401 3.62141 4.03913 5.09012 5.12795 6.1731C5.54352 6.59022 6.0151 6.9172 6.51872 7.15432C5.19643 7.37273 4.18794 8.52137 4.18794 9.90555C4.18794 9.94512 4.18877 9.98451 4.1904 10.0237Z"
          fill={color}
        />
        <path
          d="M8.04549 3.953L8.41275 5.17064C8.37653 5.19971 8.34085 5.22942 8.30572 5.25977L7.23538 4.53348L5.99667 5.37401L6.42528 3.953L5.23367 3.05209L6.73613 3.01029L7.23538 1.61714L7.73463 3.01029L9.2371 3.05209L8.04549 3.953Z"
          fill={color}
        />
        <path
          d="M12.2804 3.12639L13.0528 2.54591L12.0826 2.52269L11.7576 1.61714L11.4326 2.52269L10.4624 2.54591L11.2348 3.12639L10.9569 4.04588L11.7576 3.50255L12.5583 4.04588L12.2804 3.12639Z"
          fill={color}
        />
        <path
          d="M5.58226 14.7857H14.6453C16.1854 14.7857 17.434 13.5371 17.434 11.997C17.434 10.689 16.5335 9.59139 15.3186 9.29021C15.3344 9.14892 15.3425 9.00531 15.3425 8.85981C15.3425 6.74214 13.6258 5.02544 11.5081 5.02544C9.75166 5.02544 8.27105 6.20644 7.81705 7.81769C7.76958 7.81529 7.7218 7.81407 7.67373 7.81407C6.13361 7.81407 4.8851 9.06258 4.8851 10.6027C4.8851 10.6423 4.88592 10.6817 4.88756 10.7208C4.07395 11.0073 3.49078 11.7826 3.49078 12.6942C3.49078 13.8493 4.42717 14.7857 5.58226 14.7857Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_8_435">
          <rect
            width={width}
            height={height}
            fill={color}
            transform="translate(0.702148 0.145325)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}