import { FiSunrise, FiSunset } from "react-icons/fi";
import IoHumidity from "../../Icons/IoHumidity";
import IoWindSpeed from "../../Icons/IoWindSpeed";
import { IoSpeedometerOutline } from "react-icons/io5";
import { useTheme } from "../../Contexts/ThemeContext";
import IoHumidityWhite from "../../Icons/IoHumidityWhite";
import IoWindSpeedWhite from "../../Icons/IoWindSpeedWhite";
import IoUv from "../../Icons/IoUv";
import IoUvWhite from "../../Icons/IoUvWhite";
import { calculateWeather, formatTime, getWeatherIcon } from "../../utils/helpers";
import { useCityWeather } from "../../Contexts/CityWeatherContext";

const ShowWeatherBox: React.FC = () => {
  const { theme } = useTheme();
  const { weatherData } = useCityWeather();
  
  if (!weatherData) return <p>no data</p>;
  
  const { daily, hourly } = weatherData;

  const { sunrise, sunset, temperature_2m_max, temperature_2m_min , weathercode } = daily;
  const { pressure_msl, windspeed_10m, uv_index, relativehumidity_2m } = hourly;

  const windSpeed = calculateWeather(windspeed_10m);
  const uv = calculateWeather(uv_index);
  const humidity = calculateWeather(relativehumidity_2m);

  const temprature = Math.trunc(
    (temperature_2m_max[0] + temperature_2m_min[0]) / 2
  );

  const sunriseTime = formatTime(sunrise[0]);
  const sunsetTime = formatTime(sunset[0]);

  const { icon: weatherIcon, condition: weatherTitle } = getWeatherIcon(weathercode[0]);

  return (
    <div className="flex gap-x-10 p-6 w-max bg-primary dark:bg-zinc-500 shadow-2xl rounded-3xl">
      {/* Degree & Sunrise and Sunset */}
      <div className="flex flex-col justify-between items-center h-full">
        <h1 className="font-bold text-6xl dark:text-white/90">
          {temprature}°C
        </h1>
        <div>
          {/* Sunrise */}
          <div className="flex items-center gap-2 dark:text-white/90 ">
            <FiSunrise className="size-6" />
            <div>
              <h3 className="font-bold">Sunrise</h3>
              <span className="block text-xs ">{sunriseTime}</span>
            </div>
          </div>
          {/* Sunset */}
          <div className="flex items-center gap-2 dark:text-white/90 mt-2">
            <FiSunset className="size-6" />
            <div>
              <h3 className="font-bold">Sunset</h3>
              <span className="block text-xs ">{sunsetTime}</span>
            </div>
          </div>
        </div>
      </div>
      {/*Weather Image */}
      <div className="flex flex-col justify-between items-center">
        <img className="size-48"
          src={`../../../public/images/${weatherIcon}.png`}
          alt={weatherTitle}
        />
        <h1 className="font-bold text-3xl dark:text-white/90">
          {weatherTitle}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col items-center">
          {theme === "light" ? <IoHumidity /> : <IoHumidityWhite />}
          <span className="font-bold">{humidity}%</span>
          <span className="mt-2">Humidity</span>
        </div>
        <div className="flex flex-col items-center -mt-2">
          {theme === "light" ? <IoWindSpeed /> : <IoWindSpeedWhite />}
          <span className="font-bold">{windSpeed}km/h</span>
          <span className="mt-2">Wind Speed</span>
        </div>
        <div className="flex flex-col items-center -mt-1">
          <IoSpeedometerOutline className="size-16 text-zinc-600 dark:text-white" />
          <span className="font-bold">{pressure_msl[0]}hPa</span>
          <span className="mt-2">Pressure</span>
        </div>
        <div className="flex flex-col items-center">
          {theme === "light" ? <IoUv /> : <IoUvWhite />}
          <span className="font-bold">{uv}</span>
          <span className="mt-2">UV</span>
        </div>
      </div>
    </div>
  );
};

export default ShowWeatherBox;
