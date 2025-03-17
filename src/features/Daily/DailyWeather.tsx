import { formatDate, getWeatherIcon } from "../../utils/helpers";

interface DailyWeatehrProps {
  temprature_min: number;
  temprature_max: number;
  time:string;
  weatherCode: number
}


const DailyWeather : React.FC<DailyWeatehrProps> = ({
  temprature_max , temprature_min , time ,weatherCode
}) => {

  const temrature = Math.trunc((temprature_max + temprature_min) / 2)

  const { icon: weatherIcon, condition: weatherTitle } =
    getWeatherIcon(weatherCode);

  const {dateFormatted} = formatDate(time)  
  
    return (
      <div className="flex items-center gap-x-11 mt-3">
        <img
          className="size-11"
          src={`/public/images/${weatherIcon}.png`}
          alt={weatherTitle}
        />
        <h3 className="font-bold text-xl">{temrature}°C</h3>
        <span className="font-bold">{dateFormatted}</span>
      </div>
    );
}

export default DailyWeather;