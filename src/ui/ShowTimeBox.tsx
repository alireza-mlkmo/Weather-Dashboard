
import { useCityWeather } from "../Contexts/CityWeatherContext";
import { formatDate } from "../utils/helpers";

const ShowTimeBox : React.FC = () => {
    const {cityData} = useCityWeather();

    if(!cityData)return null;

    const {cityName , countryName , formatted:time} = cityData;

    const { timeFormatted, dateFormatted } = formatDate(time);
  
    return (
      <div className="flex flex-col items-center py-8 px-12 md:py-12 md:px-28  w-full lg:w-max bg-primary dark:bg-zinc-500 shadow-2xl rounded-3xl">
        <h2 className="font-bold text-2xl md:text-4xl dark:text-white/90">
          {countryName}/{cityName}
        </h2>
        <h1 className="font-bold text-4xl md:text-6xl dark:text-white/90 mt-4 md:mt-8">
          {timeFormatted}
        </h1>
        <p className="dark:text-white/90 mt-2 text-sm md:text-base">{dateFormatted}</p>
      </div>
    );
}

export default ShowTimeBox