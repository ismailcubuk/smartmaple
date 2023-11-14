import React from "react";
import data from "../data/ReactProjectData.json";
import RightArrow from "../assets/icons/menu/RightArrow";
import LeftArrow from "../assets/icons/menu/LeftArrow";
const { current } = data.weeklyWeather;

export default function WeeklyForecast() {
  return (
    <div className=" py-11 px-1 card h-3/6 w-full flex">
      <ul className="flex w-full border-2 h-full items-center justify-between">
        <button className="px-2 border-2 h-full flex items-center justify-center">
            <LeftArrow color="white" width={13} height={15}/>
        </button>
        {Object.keys(current).map((day, index) => (
          <li key={index} className="flex border-2 h-full w-full  flex-col justify-around items-center">
            <p>{day}</p>
            <div>{current[day].type}</div>
            <div>{current[day].degree}°C</div>
          </li>
        ))}
        <button className="px-2 border-2 h-full flex items-center justify-center">
            <RightArrow color="white" width={13} height={15}/>
        </button>
      </ul>
    </div>
  );
}
