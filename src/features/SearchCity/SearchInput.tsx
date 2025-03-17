import { GoSearch } from "react-icons/go";
import { useCityWeather } from "../../Contexts/CityWeatherContext";
import { useState } from "react";

const SearchInput: React.FC = () => {
  const [cityName, setCityName] = useState<string>("");
  const { dispatch } = useCityWeather();

  function handleClickSearch() {
    dispatch({ type: "SET_CITY_NAME", payload: cityName });
  }

  return (
    <div className="flex items-center gap-x-2 px-4 rounded-3xl bg-primary dark:bg-zinc-500 shadow-2xl w-3/4 md:w-1/2">
      <GoSearch
        onClick={handleClickSearch}
        className="w-7 h-7 text-zinc-700 dark:text-gray-300 cursor-pointer"
      />
      <input
        onChange={(e) => setCityName(e.target.value)}
        className="w-full py-4 text-black dark:text-white outline-none"
        type="text"
        placeholder="Search for your preffered city..."
      />
    </div>
  );
};

export default SearchInput;
