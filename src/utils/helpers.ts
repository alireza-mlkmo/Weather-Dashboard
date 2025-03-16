export function formatTime(time: string) : string{
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${
      hours >= 12 ? "PM" : "AM"
    }`;
}

export function formatDate(time: string): { dateFormatted: string , timeFormatted: string } {
  const date = new Date(time);

  const hours = date?.getHours()?.toString().padStart(2, "0");
  const minutes = date?.getMinutes()?.toString().padStart(2, "0");

  const timeFormatted = `${hours}:${minutes}`;

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };
  const dateFormatted = date.toLocaleDateString("en-US", options);

  return { timeFormatted, dateFormatted };
}

export function calculateWeather(windSpeed: number[]): number {
  windSpeed = [windSpeed[0], windSpeed[1]];
  const minSpeen = Math.min(...windSpeed);
  const maxSpeed = Math.max(...windSpeed);
  return Math.trunc((maxSpeed + minSpeen) / 2);
}


export const getWeatherIcon = (weatherCode : number) : {icon?: string , condition:string} => {
  switch (weatherCode) {
    case 0:
    case 1:
    case 2:
    case 3:
      return { icon: "sun", condition: "Sunny" };
    case 45:
    case 48:
      return { icon: 'fog', condition: "Fog" };
    case 51:
    case 53:
    case 55:
      return { icon: "drizzle", condition: "Drizzle" };
    case 56:
    case 57:
      return { icon: "drizzle", condition: "Freezing drizzle" };
    case 61:
    case 63:
    case 65:
      return { icon: 'rain', condition: "Rain" };
    case 66:
    case 67:
      return { icon: 'freezing-rain', condition: "Freezing rain" };
    case 71:
    case 73:
    case 75:
      return { icon: 'snowflake', condition: "Snow" };
    case 77:
      return { icon: "snowflake", condition: "Snow grains" };
    case 80:
    case 81:
    case 82:
      return { icon: 'shower', condition: "Rain showers" };
    case 85:
    case 86:
      return { icon: 'snowflake', condition: "Snow showers" };
    case 95:
    case 96:
    case 99:
      return { icon: 'lightning', condition: "Thunderstorm" };
    default:
      return {condition: "Unknown" };
  }
};

