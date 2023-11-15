import React from "react";
import Icons from "./Icons";

export const shortedDay = (day) => {
  switch (day) {
    case "sunday":
      return "S";
    case "monday":
      return "M";
    case "tuesday":
      return "T";
    case "wednesday":
      return "W";
    case "thursday":
      return "T";
    case "friday":
      return "F";
    case "saturday":
      return "S";
    default:
      return "";
  }
};

export const ShortedDays = ({ current }) => {
  return (
    <div className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12">
      <Icons current={current} />
    </div>
  );
};
