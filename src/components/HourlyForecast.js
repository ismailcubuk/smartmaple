import React from "react";
import forecastApi from "../data/ReactProjectData.json";
import Thunder from "../assets/icons/forecast/Thunder";
import NightCloudy from "../assets/icons/forecast/NightCloudy";
import Night from "../assets/icons/forecast/Night";
import NightThunder from "../assets/icons/forecast/NightThunder";
import Clock from "../assets/icons/menu/Clock";

import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function HourlyForecast() {
  const forecastData = forecastApi.forecast;

  const data = Object.keys(forecastData).map((time) => ({
    time,
    degree: forecastData[time],
  }));

  const renderCustomizedLabel = (props) => {
    const { x, y, value, index } = props;

    const wind = (() => {
      switch (index) {
        case 0:
          return 11.7;
        case 1:
          return 9.3;
        case 2:
          return 12;
        case 3:
          return 15;
        case 4:
          return 15;
        case 5:
          return 15;
        default:
          return 0;
      }
    })();

    const icon = (() => {
      switch (index) {
        case 0:
          return <NightCloudy width={24} height={24} color="white" />;
        case 1:
          return <Night width={24} height={24} color="white" />;
        case 2:
          return <NightThunder width={24} height={24} color="white" />;
        case 3:
          return <Thunder width={24} height={24} color="white" />;
        case 4:
          return <Thunder width={24} height={24} color="white" />;
        case 5:
          return <NightThunder width={24} height={24} color="white" />;
        default:
          return null;
      }
    })();

    return (
      <g>
      <text x={x} y={y - 10} fill="white" textAnchor={index === 0 ? "start" : "end"}>
        {value}
      </text>
      <foreignObject x={index === 0 ? x +5  : x-25} y={y + 10} width={24} height={24}>
        {icon}
      </foreignObject>
      <text x={x} y={y + 60} fill="white" textAnchor={index === 0 ? "start" : "end"} fontSize="10px">
        {data[index].time}
      </text>
      <text x={x} y={y + 50} fill="white" textAnchor={index === 0 ? "start" : "end"} fontSize="10px">
        {wind}km/h
      </text>
      </g>
    );
  };

  return (
    <div className="w-full h-full card flex flex-col overflow-hidden justify-between">
      <div className="px-5 pt-3 h-full flex gap-2">
        <Clock width={25} height={25} color="white"/>
        Hourly Forecast
      </div>
      <div className="h-40 lg:h-full w-full border-2 ">
        <ResponsiveContainer width="100%" height="110%" >
          <LineChart data={data}>
            <Line
              dot={false}
              type="monotone"
              dataKey="degree"
              stroke="white"
              strokeWidth={2}
              label={renderCustomizedLabel}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
