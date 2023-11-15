import React from "react";
import Clock from "../assets/icons/menu/Clock";
import data from "../data/ReactProjectData.json";
import RealFeel from "../assets/icons/airconditions/RealFeel";
import Drops from "../assets/icons/airconditions/Drops";
import Wind from "../assets/icons/airconditions/Wind";
import Sun from "../assets/icons/forecast/Sunny";
import DetailBg from "../assets/images/DetailBG.png"
export default function Detail() {
  const dateObject = new Date(data.date);
  const hours = dateObject.getUTCHours();
  const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');

  const airConditionsArray = data.airConditions.split("::");
  const airConditionItems = [
    { icon: <RealFeel width="100%" height="100%" color="white" />, label: "Real Feel", value: `${airConditionsArray[0]}°` },
    { icon: <Wind width="100%" height="100%" color="white" />, label: "Wind", value: `${airConditionsArray[2]} km/hr` },
    { icon: <Drops width="100%" height="100%" color="white" />, label: "Change of Rain", value: `${airConditionsArray[1]}%` },
    { icon: <Sun width="100%" height="100%" color="white" />, label: "UV Index", value: airConditionsArray[3] }
  ];

  return (
    <div className="w-full h-full card">
      <div className="flex items-center w-full h-1/6 gap-6 pl-5">
        <div className="w-10 h-10 sm:w-12 sm:h-12">
        <Clock width="100%" height="100%" color="white" />
        </div>
        <p className="text-[16px] sm:text-[24px] lg:text-[32px] font-medium">{hours}:{minutes}PM GMT</p>
      </div>
      <p className="w-full text-[16px] sm:text-[24px] lg:text-[32px] h-1/6 flex items-center font-bold pl-8">
        AIR CONDITIONS
      </p>
      <div className="h-4/6 w-full flex justify-around bg-cover pt-10" style={{backgroundImage: `url(${DetailBg})`}}>
        <div className="h-full w-full flex flex-row flex-wrap ">
          {airConditionItems.map((item, index) => (
            <div key={index} className="flex  w-2/4 gap-2 items-center lg:pl-10">
              <div className="flex w-10 h-10 self-center">
              {item.icon}
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium">{item.label}</p>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
