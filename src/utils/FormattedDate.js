import React from "react";
import data from "../data/ReactProjectData.json";

export default function FormattedDate() {
  const dateObject = new Date(data.date);
  const day = dateObject.toLocaleDateString("en-US", { weekday: "long" });
  const month = dateObject.toLocaleDateString("en-US", { month: "short" });
  const dayOfMonth = dateObject.getDate();
  const year = dateObject.getFullYear();

  const formattedDate = `${day} | ${dayOfMonth} ${month} ${year}`;
  return <div className="text-[40px]">{formattedDate}</div>;
}

