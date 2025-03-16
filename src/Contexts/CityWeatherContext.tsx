import React, { createContext, useContext, useEffect, useReducer } from "react";

interface CityData {
  abbreviation: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  dst: string;
  formatted: string;
  gmtOffset: number;
  message: string;
  nextAbbreviation: null;
  regionName: string;
  status: string;
  timestamp: number;
  zoneEnd: null;
  zoneName: string;
  zoneStart: number;
}
interface WeatherData {
  latitude: number;
  longitude: number;
  hourly: {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    pressure_msl: number[];
    windspeed_10m: number[];
    weathercode: number[];
    uv_index: number[];
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
  timezone: string;
}
interface Position {
  latitude: number;
  longitude: number;
}
interface State {
  isLoading: boolean;
  cityName: string;
  position: Position | undefined;
  cityData: CityData | undefined;
  weatherData: WeatherData | undefined;
}

type Action =
  | { type: "SET_CITY_NAME"; payload: string }
  | { type: "SET_POSITION"; payload: Position }
  | { type: "LOADING_DATA" }
  | { type: "CITY_DATA_LOADED"; payload: CityData }
  | { type: "WEATHER_DATA_LOADED"; payload: WeatherData }
  | { type: "LOAD_DATA_ERROR" };

const initalState: State = {
  isLoading: false,
  cityName: "",
  position: undefined,
  cityData: undefined,
  weatherData: undefined,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CITY_NAME": {
      return { ...state, cityName: action.payload };
    }
    case "SET_POSITION": {
      return { ...state, position: action.payload, cityName: "" };
    }
    case "LOADING_DATA": {
      return { ...state, isLoading: true };
    }
    case "CITY_DATA_LOADED": {
      return { ...state, isLoading: false, cityData: action.payload };
    }
    case "WEATHER_DATA_LOADED": {
      return { ...state, isLoading: false, weatherData: action.payload };
    }
    case "LOAD_DATA_ERROR": {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
}
interface CityContextData {
  cityData: CityData | undefined;
  isLoading: boolean;
  cityName: string | undefined;
  dispatch: React.Dispatch<Action>;
  weatherData: WeatherData | undefined;
}

const CityContext = createContext<CityContextData | undefined>(undefined);

const CityWeatherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [{ cityData, weatherData, isLoading, cityName, position }, dispatch] =
    useReducer(reducer, initalState);

  useEffect( function (): void{
    //  get CityData and WeatherData by position
    if (position && !cityName) {
      getCity(position.latitude, position.longitude);
      getWeather(position.latitude, position.longitude);
    }
    //  get CityData and WeatherData by position
    if (cityName) {
      getLocation();
    }
  },
    [cityName, position]
  );

  async function getLocation(): Promise<void> {
    try {
      dispatch({ type: "LOADING_DATA" });

      const response = await fetch(
        `https://secure.geonames.org/searchJSON?q=${cityName}&maxRows=1&username=demov`
      );

      if (!response.ok) throw new Error("Cannot get City Response...");
      const data = await response.json();

      if (data) {
        const lat = data.geonames[0].lat;
        const lng = data.geonames[0].lng;
        getCity(lat, lng);
        getWeather(lat, lng);
      }
    } catch (error) {
      console.error("Error:" + error);
    } finally {
      dispatch({ type: "LOAD_DATA_ERROR" });
    }
  }

  async function getCity(lat: number, lng: number): Promise<void> {
    try {
      dispatch({ type: "LOADING_DATA" });
      const response = await fetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=ZGIXGBKAX3ER&format=json&by=position&lat=${lat}&lng=${lng}`
      );
      if (!response.ok) throw new Error("Cannot get City Response...");

      const data = await response.json();

      if (data) dispatch({ type: "CITY_DATA_LOADED", payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOAD_DATA_ERROR" });
    }
  }

  async function getWeather(lat: number, lng: number): Promise<void> {
    try {
      dispatch({ type: "LOADING_DATA" });
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=uv_index,temperature_2m,relativehumidity_2m,pressure_msl,windspeed_10m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
      );
      if (!response.ok) throw new Error("Cannot get Weather Response...");

      const data = await response.json();

      if (data) dispatch({ type: "WEATHER_DATA_LOADED", payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "LOAD_DATA_ERROR" });
    }
  }

  return (
    <CityContext.Provider
      value={{ cityData, weatherData, isLoading, cityName, dispatch }}
    >
      {children}
    </CityContext.Provider>
  );
};

const useCityWeather = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};

export { useCityWeather, CityWeatherProvider };
