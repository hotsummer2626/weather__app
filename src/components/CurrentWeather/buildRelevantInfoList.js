export const buildRelevantInfoList = ({ main, wind, sys }) => {
  const formattedNumber = (number) =>
    number.toString().length === 1 ? `0${number}` : number;
  const sunriseDate = new Date(sys.sunrise * 1000);
  const sunsetDate = new Date(sys.sunset * 1000);
  const sunriseHour = formattedNumber(sunriseDate.getHours());
  const sunriseMinute = formattedNumber(sunriseDate.getMinutes());
  const sunsetHour = formattedNumber(sunsetDate.getHours());
  const sunsetMinute = formattedNumber(sunsetDate.getMinutes());
  return [
    {
      text: "High",
      value: `${parseFloat(main.temp_max - 273.15).toFixed(1)}°`,
    },
    { text: "Wind", value: `${wind.speed} m/s` },
    { text: "Sunrise", value: `${sunriseHour}:${sunriseMinute}` },
    {
      text: "Low",
      value: `${parseFloat(main.temp_min - 273.15).toFixed(1)}°`,
    },
    { text: "Humidity", value: `${main.humidity}%` },
    { text: "Sunset", value: `${sunsetHour}:${sunsetMinute}` },
  ];
};
