import Thunder from "../assets/icons/forecast/Thunder";
import NightCloudy from "../assets/icons/forecast/NightCloudy";
import Night from "../assets/icons/forecast/Night";
import NightThunder from "../assets/icons/forecast/NightThunder";

export const getWindSpeed = (index) => {
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
  };
  
  export const getWeatherIcon = (index) => {
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
  };
  