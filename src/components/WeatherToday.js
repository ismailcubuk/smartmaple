import React from "react";
import data from "../data/ReactProjectData.json";
import Location from "../icons/menu/Location";
import Thunder from "../icons/forecast/Thunder";

export default function WeatherToday() {
  const dateObject = new Date(data.date);
  const day = dateObject.toLocaleDateString("en-US", { weekday: "long" });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const dayOfMonth = dateObject.getDate();
  const year = dateObject.getFullYear();

  const formattedDate = `${day} | ${dayOfMonth} ${month} ${year}`;

  return (
    <div className="flex w-7/12 border-2">
      <div className="border-2 border-blue-500 w-1/6 flex flex-col justify-around">
        <div className="flex items-center gap-2">
          <Location color="red" width={28} height={28} />
          <h1 className="text-[24px]">{data.city}</h1>
        </div>
        <h1 className="text-[32px]">{data.type}</h1>
        <h1 className="text-[64px]">{data.degree}°C</h1>
      </div>
      <div className="flex border-2 justify-around items-center w-5/6 border-red-500">
        <Thunder width={200} height="full" color="white" />
        <div className="text-[40px]">{formattedDate}</div>
      </div>
    </div>
  );
}
