import { useCityWeather } from "../../Contexts/CityWeatherContext";
import DailyWeather from "./DailyWeather";

const DayliForecastBox : React.FC = ()=>{


  const {weatherData} = useCityWeather();
  if(!weatherData) return;
  const {daily} = weatherData;

  const {
    temperature_2m_max: temprature_max,
    temperature_2m_min: temprature_min,
    time,
    weathercode,
  } = daily;


  // Days of Forecast
  const daysArray = [1 , 2 , 3 , 4 , 5 ];

    return (
      <div className="p-4 pt-2 w-max bg-primary dark:bg-zinc-500 shadow-2xl rounded-3xl">
        <h2 className="text-2xl text-center font-bold dark:text-white">
          5 Days Forecast:
        </h2>

        {daysArray.map((dayNumber) => (
          <DailyWeather
            temprature_min={temprature_min[dayNumber]}
            temprature_max={temprature_max[dayNumber]}
            time={time[dayNumber]}
            weatherCode={weathercode[dayNumber]}
          />
        ))}
      </div>
    );
}

export default DayliForecastBox