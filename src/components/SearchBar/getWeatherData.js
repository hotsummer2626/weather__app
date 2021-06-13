module.exports = (data) => {
  return {
    weatherIcon: data.weather[0].icon,
    description: data.weather[0].description,
    temperature: parseFloat(data.main.temp - 273.15).toFixed(1),
    location: `${data.name} | ${data.sys.country}`,
    min: parseFloat(data.main.temp_min - 273.15).toFixed(1),
    max: parseFloat(data.main.temp_max - 273.15).toFixed(1),
    humidity: data.main.humidity,
    loading: false,
  };
};
