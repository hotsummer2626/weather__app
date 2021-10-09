export const buildRelevantInfoList = ({ humidity, wind_speed, temp }) => {
  return [
    {
      text: "Low",
      value: `${parseFloat(temp.min - 273.15).toFixed(1)}°`,
    },
    {
      text: "High",
      value: `${parseFloat(temp.max - 273.15).toFixed(1)}°`,
    },
    { text: "Wind", value: `${wind_speed} m/s` },
    { text: "Humidity", value: `${humidity}%` },
  ];
};