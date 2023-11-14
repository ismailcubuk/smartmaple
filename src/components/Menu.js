import React from "react";
import headerIcon from "../icons/header-logo.png";
import DaySleet from "../icons/forecast/DaySleet";
import Explore from "../icons/menu/Explore";
import Location from "../icons/menu/Location";
import Settings from "../icons/menu/Settings";

const menuItems = [
  { icon: <DaySleet width={80} height={80} color="white" />, label: "weather" },
  { icon: <Explore width={34} height={34} color="#C4C3C1" />, label: "explore" },
  { icon: <Location width={34} height={34} color="#C4C3C1" />, label: "cities" },
  { icon: <Settings width={34} height={34} color="#C4C3C1" />, label: "settings" },
];

export default function Menu() {
  return (
    <div className="flex flex-col items-center h-full justify-around">
    <img src={headerIcon} width={100} height={100} alt="headerIcon" />
    {menuItems.map((item, index) => (
      <div key={index} className="cursor-pointer w-full flex flex-col items-center gap-1">
        {item.icon}
        <p className="text-primary text-xs font-semibold">{item.label}</p>
      </div>
    ))}
  </div>
  )
}
