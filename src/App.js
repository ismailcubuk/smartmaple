import React from "react";
import WeatherToday from "./components/WeatherToday";
import Menu from "./components/Menu";
import backgroundImage from './assets/images/background.jpeg';
import Activities from "./components/Activities";

export default function App() {
  return (
    <div className="font-inter flex flex-col h-screen bg-cover text-white" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="flex h-2/6 w-full">
        <WeatherToday />
        <div>asd</div>
      </div>
      <div className="flex h-4/6 w-7/12 gap-6">
        <div className="w-2/12 card">
          <Menu/>
        </div>
        <div className="w-10/12 flex flex-col gap-5">
          <div className="h-3/6 card">
            <Activities/>
          </div>
          <div className="h-3/6 card">forecast</div>
        </div>
      </div>
    </div>
  );
}
