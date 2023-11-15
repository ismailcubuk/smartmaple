import React, { useState } from "react";
import data from "../data/ReactProjectData.json";
import RightArrow from "../assets/icons/menu/RightArrow";
import LeftArrow from "../assets/icons/menu/LeftArrow";
import Icons from "../utils/Icons";
import { shortedDay } from "../utils/ShortedDays";
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
    <div className="px-1 card h-full w-full flex flex-col items-center ">
      <div className="pt-2 uppercase font-extrabold">{currentPage} WEEK</div>
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
            <p className="hidden md:flex lg:hidden xl:flex">{day}</p>
            <div className="flex md:hidden lg:flex xl:hidden">
              {shortedDay(day)}
            </div>
            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 ">
              <Icons current={currentData[day]} />
            </div>
            <div className="text-xs sm:text-sm md:text-base">
              {currentData[day].degree}°C
            </div>
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
