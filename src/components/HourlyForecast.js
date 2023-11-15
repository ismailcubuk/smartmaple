import React from "react";
import forecastApi from "../data/ReactProjectData.json";
import Clock from "../assets/icons/menu/Clock";
import WeatherLabel from "../utils/WeatherLabel"; 

import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function HourlyForecast() {
  const forecastData = forecastApi.forecast;

  const data = Object.keys(forecastData).map((time) => ({
    time,
    degree: forecastData[time],
  }));

  return (
    <div className="w-full h-full card flex flex-col overflow-hidden justify-between">
      <div className="px-5 pt-3 h-full flex gap-2">
        <Clock width={25} height={25} color="white" />
        Hourly Forecast
      </div>
      <div className="h-40 lg:h-full w-full border-2 ">
        <ResponsiveContainer width="100%" height="110%">
          <LineChart data={data}>
            <Line
              dot={false}
              type="monotone"
              dataKey="degree"
              stroke="white"
              strokeWidth={2}
              label={(props) => <WeatherLabel {...props} data={data} />}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
