import React from "react";
import { getWindSpeed, getWeatherIcon } from "./Switchcase";

const WeatherLabel = (props) => {
  const { x, y, value, index, data } = props;
// SWİTCHCASE
  const wind = getWindSpeed(index);
  const icon = getWeatherIcon(index);

  return (
    <g>
      <text
        x={x}
        y={y - 10}
        fill="white"
        textAnchor={index === 0 ? "start" : "end"}
      >
        {value}
      </text>
      <foreignObject
        x={index === 0 ? x + 5 : x - 25}
        y={y + 10}
        width={24}
        height={24}
      >
        {icon}
      </foreignObject>
      <text
        x={x}
        y={y + 60}
        fill="white"
        textAnchor={index === 0 ? "start" : "end"}
        fontSize="10px"
      >
        {data[index].time}
      </text>
      <text
        x={x}
        y={y + 50}
        fill="white"
        textAnchor={index === 0 ? "start" : "end"}
        fontSize="10px"
      >
        {wind}km/h
      </text>
    </g>
  );
};

export default WeatherLabel;
