import axios from "axios";
import APIKEY from "./apikey";

const defaultUrl = "http://api.openweathermap.org/data/2.5";

export const getCurrentWeather = (cityName) => {
  return axios
    .get(`${defaultUrl}/weather?q=${cityName}&appid=${APIKEY}`)
    .then((res) => res.data)
    .catch((err) => alert("please input a correct city name"));
};

export const getForecastWeather = (lat, lon) => {
  return axios
    .get(
      `${defaultUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${APIKEY}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
