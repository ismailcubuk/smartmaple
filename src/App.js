import React from "react";
import WeatherToday from "./components/WeatherToday";
import Menu from "./components/Menu";
import backgroundImage from "./assets/images/background.jpeg";
import SmartMaple from "./assets/images/SmartMaple.png";
import Activities from "./components/Activities";
import WeeklyForecast from "./components/WeeklyForecast";
import Detail from "./components/Detail";
import HourlyForecast from "./components/HourlyForecast";

export default function App() {
  return (
    <div
      className="font-inter flex h-screen flex-col bg-cover text-white p-8 gap-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" h-full lg:h-1/3 flex flex-wrap lg:flex-nowrap gap-8 w-full">
        <div className=" w-full lg:w-7/12">
          <WeatherToday />
        </div>
        <div className=" flex flex-col w-full lg:w-5/12">
          <img
            src={SmartMaple}
            className="w-[270px] h-16 self-center"
            alt="SmartMaple"
          />
          <HourlyForecast />
        </div>
      </div>
      <div className=" h-2/3 gap-8 flex flex-wrap lg:flex-nowrap w-full">
        <div className="w-full lg:w-7/12 flex flex-col lg:flex-row gap-8 ">
          <div className=" w-full lg:w-2/12">
            <Menu />
          </div>
          <div className=" flex gap-8 flex-col w-full lg:w-10/12">
            <div className="h-1/2">
              <Activities />
            </div>
            <div className="h-1/2 ">
              <WeeklyForecast />
            </div>
          </div>
        </div>
        <div className=" w-full lg:w-5/12">
          <Detail />
        </div>
      </div>
    </div>
  );
}
