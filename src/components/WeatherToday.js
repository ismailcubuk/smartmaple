import React from "react";
import data from "../data/ReactProjectData.json";
import Location from "../assets/icons/menu/Location";
import Thunder from "../assets/icons/forecast/Thunder";
import FormattedDate from "../utils/FormattedDate";

export default function WeatherToday() {
  return (
    <div className="flex w-full h-full">
      <div className="h-full flex flex-col justify-between items-center w-2/6 xl:w-1/6 lg:items-start">
        <div className="flex flex-col lg:gap-3 justify-between">
          <div className="flex flex-col lg:gap-2 sm:flex-row lg:flex-col xl:flex-row items-center">
            <div className=" w-4 h-4 sm:w-6 sm:h-6 lg:h-7 lg:w-7">
              <Location color="white" width="100%" height="100%" />
            </div>
            <div className="text-[16px] sm:text-[20px] lg:text-[24px]">{data.city}</div>
          </div>
          <div className="text-[18px] sm:text-[24px] lg:text-[32px]">{data.type}</div>
        </div>
        <div className="text-[24px] sm:text-[36px] lg:text-[48px] xl:text-[64px]">{data.degree}°C</div>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-4/6 xl:w-5/6 justify-around">
        <div className=" w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-48 lg:h-48">
        <Thunder width="100%" height="full" color="white" />
        </div>
        <FormattedDate />
      </div>
    </div>
  );
}
