import { GrLocation } from "react-icons/gr";
import { getGeo } from "../../services/getPosition";
import { useCityWeather } from "../../Contexts/CityWeatherContext";

interface Position {
  latitude: number;
  longitude: number;
}

const PositionButton: React.FC = () => {
 const {dispatch} = useCityWeather();

  async function handleClickButton(){
    dispatch({type:"LOADING_DATA"})
    const position: Position = await getGeo();
    dispatch({type:"SET_POSITION" , payload: position})
    
  }
  return (
    <button
      onClick={handleClickButton}
      className="flex items-center justify-center gap-2 p-3 mt-6 md:mt-0 w-full md:w-auto bg-green-600 rounded-4xl cursor-pointer shadow-2xl"
    >
      <GrLocation className="size-5 text-zinc-800" />
      <span className="font-bold text-gray-300">Current Location</span>
    </button>
  );
};

export default PositionButton;