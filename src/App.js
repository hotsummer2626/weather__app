import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import LoadingElement from "./components/LoadingElement";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import APIKEY from "./components/SearchBar/apikey";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ForecaseWeather from "./components/ForecastWeather/ForecastWeather";
import "./App.css";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
  border: 2px solid black;
  border-radius: 10px;
`;

const getCurrentWeather = (cityName) => {
  const defaultUrl = "http://api.openweathermap.org/data/2.5";
  const apiKey = APIKEY;
  return axios
    .get(`${defaultUrl}/weather?q=${cityName}&appid=${apiKey}`)
    .then((res) => res.data);
};

const getForecastWeather = (lat, lon) => {
  const defaultUrl = "http://api.openweathermap.org/data/2.5";
  const apiKey = APIKEY;
  return axios
    .get(
      `${defaultUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}`
    )
    .then((res) => res.data);
};

const App = () => {
  const [weather, setWeather] = useState({});
  const [forecastWeather, setForecastWeather] = useState({});
  const [isLoading, setIsLoaing] = useState(true);

  const setDataWorkFlow = async (cityName) => {
    setIsLoaing(true);
    const weather = await getCurrentWeather(cityName);
    weather.temperature = parseFloat(weather.main.temp - 273.15).toFixed(1);
    const { lat, lon } = weather.coord;
    const forecastWeather = await getForecastWeather(lat, lon);
    // console.log(forecastWeather);
    // console.log(new Date(1633528800000));
    setWeather(weather);
    setForecastWeather(forecastWeather);
    setIsLoaing(false);
  };

  useEffect(() => {
    setDataWorkFlow("sydney");
  }, []);

  return (
    <>
      <div
        className={weather.temperature > 16 ? "container warm" : "container"}
      >
        <SearchBar setDataWorkFlow={setDataWorkFlow} />
        {isLoading ? (
          <LoadingElement loading={isLoading} />
        ) : (
          <WeatherResult {...weather} />
        )}
      </div>
      {isLoading ? (
        <LoadingElement loading={isLoading} />
      ) : (
        <Container>
          <CurrentWeather weatherInfos={weather} />
          <ForecaseWeather forecastWeatherInfos={forecastWeather} />
        </Container>
      )}
    </>
  );
};

export default App;
