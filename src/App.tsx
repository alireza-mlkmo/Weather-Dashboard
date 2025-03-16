import { useCityWeather } from "./Contexts/CityWeatherContext";
import SearchCity from "./features/SearchCity/SearchCity";
import DayliForecastBox from "./features/Daily/DailyForecastBox";
import HourlyForecastBox from "./features/Hourly/HourlyForecastBox";
import ShowTimeBox from "./ui/ShowTimeBox";
import ShowWeatherBox from "./features/NowWeather/ShowWeatherBox";
import Spinner from "./ui/Spinner";

export default function App() {
  const { isLoading, weatherData } = useCityWeather();
  if (isLoading) return <Spinner />;
  return (
    <div className="container">
      <SearchCity />
      {weatherData ? (
        <>
          <div className="flex justify-between flex-wrap mt-10 ">
            <ShowTimeBox />
            <ShowWeatherBox />
          </div>
          <div className="flex justify-between mt-10">
            <DayliForecastBox />
            <HourlyForecastBox />
          </div>
        </>
      ) : (
        <h1 className="text-center font-bold text-5xl mt-32">
          Search name or get positon of your city to start...
        </h1>
      )}
    </div>
  );
}
