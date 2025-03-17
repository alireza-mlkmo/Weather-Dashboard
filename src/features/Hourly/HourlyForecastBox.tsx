import { useCityWeather } from "../../Contexts/CityWeatherContext";
import { formatDate } from "../../utils/helpers";
import HourlyWeather from "./HourlyWeather";

const HourlyForecastBox: React.FC = () => {
  const { weatherData, cityData } = useCityWeather();
  if (!weatherData || !cityData) return;


  const { hourly } = weatherData;
  const { formatted: cityTime } = cityData;

  const { time, weathercode, temperature_2m, windspeed_10m } = hourly;

  const nowTimeIndex: number = time.findIndex(
    (time) =>
      formatDate(time).dateFormatted === formatDate(cityTime).dateFormatted &&
      formatDate(time).timeFormatted > formatDate(cityTime).timeFormatted
  );

  const hours = time.slice(nowTimeIndex, nowTimeIndex + 5);
  const weatherCode = weathercode.slice(nowTimeIndex, nowTimeIndex + 5);
  const temperature = temperature_2m.slice(nowTimeIndex, nowTimeIndex + 5);
  const windSpeed = windspeed_10m.slice(nowTimeIndex, nowTimeIndex + 5);

  const hourlyData = hours.map((hour, index) => ({
    hour,
    weatherCode: weatherCode[index],
    temperature: temperature[index],
    windSpeed: windSpeed[index],
  }));

  return (
    <div className="px-4 lg:px-20 pt-2 mt-4 lg:mt-0 w-max  bg-primary dark:bg-zinc-500 shadow-2xl rounded-3xl">
      <h2 className="text-2xl text-center font-bold dark:text-white">
        Hourly Forecast:
      </h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-x-1 md:gap-x-2 mt-5 md:mt-8">
        {hourlyData.map((data) => (
          <HourlyWeather data={data} />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecastBox;
