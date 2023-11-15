import React from "react";
import data from "../data/ReactProjectData.json";
import Location from "../assets/icons/menu/Location";
import Thunder from "../assets/icons/forecast/Thunder";
import FormattedDate from "../utils/FormattedDate";

export default function WeatherToday() {
  return (
    <div className="flex w-7/12">
      <div className="w-1/6 flex flex-col justify-around">
        <div className="flex items-center gap-2">
          <Location color="white" width={28} height={28} />
          <h1 className="text-[24px]">{data.city}</h1>
        </div>
        <h1 className="text-[32px]">{data.type}</h1>
        <h1 className="text-[64px]">{data.degree}°C</h1>
      </div>
      <div className="flex justify-around items-center w-5/6">
        <Thunder width={200} height="full" color="white" />
        <FormattedDate />
      </div>
    </div>
  );
}
