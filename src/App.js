import React from "react";
import WeatherToday from "./components/WeatherToday";
import Menu from "./components/Menu";
import backgroundImage from './icons/background.jpeg';

export default function App() {
  return (
    <div className="font-inter flex flex-col h-screen bg-cover text-white" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="flex h-2/6 w-full">
        <WeatherToday />
        <div>asd</div>
      </div>
      <div className="flex h-4/6 w-7/12 gap-6">
        <div className="w-2/12 border-2">
          <Menu/>
        </div>
        <div className="w-10/12 flex flex-col gap-5 border-2">
          <div className="h-3/6 border-2">activities</div>
          <div className="h-3/6 border-2">forecast</div>
        </div>
      </div>
    </div>
  );
}
