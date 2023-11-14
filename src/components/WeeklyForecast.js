import React, { useState } from "react";
import data from "../data/ReactProjectData.json";
import RightArrow from "../assets/icons/menu/RightArrow";
import LeftArrow from "../assets/icons/menu/LeftArrow";
import Icons from "../utils/Icons";
const { weeklyWeather } = data;

export default function WeeklyForecast() {
  const [currentPage, setCurrentPage] = useState("current");
  const pages = ["previous", "current", "next"];
  const currentData = weeklyWeather[currentPage];

  const handlePageChange = (direction) => {
    const currentIndex = pages.indexOf(currentPage);
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= 0 && newIndex < pages.length) {
      setCurrentPage(pages[newIndex]);
    }
  };

  return (
    <div className="py-11 px-1 card h-3/6 w-full flex">
      <ul className="flex w-full h-full items-center justify-between">
        <button
          className="px-2 h-full flex items-center justify-center"
          onClick={() => handlePageChange("previous")}
        >
          <LeftArrow color="white" width={13} height={15} />
        </button>
        {Object.keys(currentData).map((day, index) => (
          <li
            key={index}
            className="flex h-full w-full  flex-col justify-around items-center"
          >
            <p>{day}</p>
            <Icons current={currentData[day]} />
            <div>{currentData[day].degree}°C</div>
          </li>
        ))}
        <button
          className="px-2 h-full flex items-center justify-center"
          onClick={() => handlePageChange("next")}
        >
          <RightArrow color="white" width={13} height={15} />
        </button>
      </ul>
    </div>
  );
}
