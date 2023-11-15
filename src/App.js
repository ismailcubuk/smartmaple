import React from "react";
import WeatherToday from "./components/WeatherToday";
import Menu from "./components/Menu";
import backgroundImage from './assets/images/background.jpeg';
import Activities from "./components/Activities";
import WeeklyForecast from "./components/WeeklyForecast";
import Detail from "./components/Detail";
import HourlyForecast from "./components/HourlyForecast";

export default function App() {
  return (
    <div className="font-inter flex flex-col h-screen bg-cover text-white p-8 gap-7" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="flex h-2/6 w-full gap-6">
        <WeatherToday />
        <HourlyForecast/>
      </div>
      <div className="flex h-4/6 w-12/12 gap-6">
        <div className="w-1/12 card">
          <Menu/>
        </div>
        <div className="w-6/12 flex flex-col gap-5">
            <Activities/>
            <WeeklyForecast/>
        </div>
        <div className="w-5/12 flex flex-col gap-5 card relative">
          <Detail/>
        </div>
      </div>
    </div>
  );
}
