import React from "react";

export default function Settings({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M12.9932 17.0278C12.9932 14.4808 15.058 12.4161 17.6049 12.4161C20.1519 12.4161 22.2166 14.4808 22.2166 17.0278C22.2166 19.5747 20.1519 21.6395 17.6049 21.6395C15.058 21.6395 12.9932 19.5747 12.9932 17.0278Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.8397 2.60882C17.258 2.17597 17.9518 2.17597 18.3702 2.60882L22.0202 6.38542H27.1831C27.7708 6.38542 28.2473 6.86189 28.2473 7.44965V12.6125L32.0239 16.2625C32.4567 16.6809 32.4567 17.3747 32.0239 17.793L28.2473 21.4431V26.6059C28.2473 27.1937 27.7708 27.6701 27.1831 27.6701H22.0202L18.3702 31.4467C17.9518 31.8796 17.258 31.8796 16.8397 31.4468L13.1896 27.6701H8.0268C7.43904 27.6701 6.96257 27.1937 6.96257 26.6059V21.4431L3.18596 17.793C2.75312 17.3747 2.75312 16.6809 3.18596 16.2625L6.96257 12.6125V7.44965C6.96257 6.86189 7.43904 6.38542 8.0268 6.38542H13.1896L16.8397 2.60882ZM17.6049 10.2876C13.8824 10.2876 10.8648 13.3053 10.8648 17.0278C10.8648 20.7503 13.8824 23.7679 17.6049 23.7679C21.3274 23.7679 24.3451 20.7503 24.3451 17.0278C24.3451 13.3053 21.3274 10.2876 17.6049 10.2876Z"
        fill={color}
      />
    </svg>
  );
}
