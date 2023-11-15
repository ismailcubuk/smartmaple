import React from "react";
import Rainy from "../assets/icons/forecast/Rainy";
import Sunny from "../assets/icons/forecast/Sunny";
import SunnyCloudy from "../assets/icons/forecast/SunnyCloudy";
import SunnyRainy from "../assets/icons/forecast/SunnyRainy";
import Thunder from "../assets/icons/forecast/Thunder";
export default function Icons({ current }) {
  let iconComponent;

  switch (current.type) {
    case "rainy":
      iconComponent = <Rainy width="100%" height="100%" color="white" />;
      break;
    case "sunny":
      iconComponent = <Sunny width="100%" height="100%" color="white" />;
      break;
    case "sunny cloudy":
      iconComponent = <SunnyCloudy width="100%" height="100%" color="white" />;
      break;
    case "sunny rainy":
      iconComponent = <SunnyRainy width="100%" height="100%" color="white" />;
      break;
    case "thunder":
      iconComponent = <Thunder width="100%" height="100%" color="white" />;
      break;
    default:
      iconComponent = null;
  }

  return <div>{iconComponent}</div>;
}
