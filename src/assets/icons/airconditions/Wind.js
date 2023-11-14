import React from "react";

export default function Wind({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 131 107"
      fill="none"
    >
      <path
        d="M92.1184 70.4745C99.5124 70.4745 105.506 64.7718 105.506 57.7372C105.506 50.7026 99.5124 44.9999 92.1184 44.9999C84.7244 44.9999 78.7303 50.7026 78.7303 57.7372"
        stroke={color}
        stroke-width="1.36222"
        stroke-linecap="round"
      />
      <path
        d="M65.3441 70.4754H92.1202"
        stroke={color}
        stroke-width="1.36222"
        stroke-linecap="round"
      />
      <path
        d="M68.0535 90.856H105.54"
        stroke={color}
        stroke-width="1.36222"
        stroke-linecap="round"
      />
      <path
        d="M97.5107 98.4984C97.5107 102.719 101.107 106.141 105.544 106.141C109.98 106.141 113.576 102.719 113.576 98.4984C113.576 94.2776 109.98 90.856 105.544 90.856"
        stroke={color}
        stroke-width="1.36222"
        stroke-linecap="round"
      />
      <path
        d="M116.229 80.6688C123.623 80.6688 129.617 74.9661 129.617 67.9315C129.617 60.8969 123.623 55.1943 116.229 55.1943C115.435 55.1943 114.658 55.2599 113.903 55.3859"
        stroke={color}
        stroke-width="1.36222"
        stroke-linecap="round"
      />
      <path
        d="M60 80.666H116.23"
        stroke={color}
        stroke-width="1.36222"
        stroke-linecap="round"
      />
    </svg>
  );
}
