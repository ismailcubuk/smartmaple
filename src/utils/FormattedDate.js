import React from "react";
import data from "../data/ReactProjectData.json";

export default function FormattedDate() {
  const dateParts = data.date.split(" ");

  const month = dateParts[1];
  const dayOfMonth = dateParts[2];
  const year = dateParts[3];
  const time = dateParts[5];

  const dateObject = new Date(`${month} ${dayOfMonth}, ${year} ${time} UTC`);

  const day = dateObject.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = `${day} | ${dayOfMonth} ${month} ${year}`;

  return (
    <div className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px] xl:text-[40px]">
      {formattedDate}
    </div>
  );
}
