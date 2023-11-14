import React from "react";

export default function Thunder({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 60 57"
      fill="none"
    >
      <path
        d="M37.5222 39.8307H45C50.5229 39.8307 55 35.6347 55 30.4587C55 26.0629 51.7708 22.374 47.4143 21.3618C47.4709 20.887 47.5 20.4043 47.5 19.9153C47.5 12.7984 41.3439 7.02895 33.75 7.02895C27.4514 7.02895 22.142 10.998 20.5139 16.413C20.3437 16.405 20.1724 16.4009 20 16.4009C14.4772 16.4009 10 20.5968 10 25.7728C10 25.9058 10.003 26.0382 10.0088 26.1698C7.09123 27.1324 5 29.7382 5 32.8017C5 36.6837 8.35786 39.8307 12.5 39.8307H19.6206L30.3294 22.2674C31.6013 20.1813 35 21.0272 35 23.4298V32.8017H37.5C39.4196 32.8017 40.623 34.7452 39.6706 36.3071L37.5222 39.8307Z"
        fill={color}
      />
      <path
        d="M22.5 39.8307L32.5 23.4298V35.1447H37.5L27.5 51.5456V39.8307H22.5Z"
        fill={color}
      />
    </svg>
  );
}