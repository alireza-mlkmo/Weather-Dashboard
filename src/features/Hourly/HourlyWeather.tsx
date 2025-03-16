import { BsCursorFill } from "react-icons/bs";
import { formatDate, getWeatherIcon } from "../../utils/helpers";

interface WeatherData {
  hour: string;
  weatherCode: number;
  temperature: number;
  windSpeed: number;
  weather?: string;
}

interface HourlyWeatherProps {
  data: WeatherData;
}

const HourlyWeather: React.FC<HourlyWeatherProps> = ({ data }) => {
  const { hour: time, weatherCode, temperature, windSpeed } = data;

  const { timeFormatted } = formatDate(time);

  const clock = Number(timeFormatted.split(":")[0]);

  const isNight = (clock >= 0 && clock <= 6) || clock >= 20;

  const { icon: weatherIcon, condition: weatherTitle } =
    getWeatherIcon(weatherCode);

  return (
    <div
      className={`${
        isNight === true
          ? "bg-linear-to-t from-gray-200 to-gray-500"
          : "bg-linear-to-t from-orange-200 to-orange-400"
      } flex flex-col items-center w-min px-7 py-2 space-y-2 font-bold rounded-2xl text-center`}
    >
      <h2 className="dark:text-white text-xl">{timeFormatted}</h2>
      <img
        className="size-12"
        src={`../../../public/images/${weatherIcon}.png`}
        alt={weatherTitle}
      />
      <h2 className="dark:text-white text-lg">{Math.trunc(temperature)}°C</h2>
      <BsCursorFill className="size-11 text-blue-400 -rotate-45" />
      <h2 className="text-lg">{windSpeed}km/h</h2>
    </div>
  );
};

export default HourlyWeather;
