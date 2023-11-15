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
      className="font-inter flex flex-col h-screen bg-cover text-white p-8 gap-7"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-2/6 flex gap-5">
        <WeatherToday />
        <div className="w-5/12 flex flex-col justify-between">
          <img src={SmartMaple} className="w-[270px] h-16 self-center" alt="SmartMaple" />
          <HourlyForecast />
        </div>
      </div>
      <div className="flex w-full h-4/6 gap-5">
        <div className="w-1/12">
          <Menu />
        </div>
        <div className=" gap-5 flex flex-col w-6/12">
          <Activities />
          <WeeklyForecast />
        </div>
        <Detail />
      </div>
    </div>
  );
}
