import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoadingElement from "./components/LoadingElement";
import SearchBar from "./components/SearchBar";
import SearchBar1 from "./components/SearchBar1";
import WeatherResult from "./components/WeatherResult";
import { getCurrentWeather, getForecastWeather } from "./api/apis";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ForecaseWeather from "./components/ForecastWeather/ForecastWeather";
import "./App.css";
import weather_bg_img from "./assets/weather-bg.jpg";
import { MQ } from "./mediaQueries";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px;
  border: 2px solid black;
  border-radius: 10px;
  background-image: url(${weather_bg_img});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  ${MQ("sm")`
    width: 100%;
    padding: 30px 10px;
  `}
`;

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
    setWeather(weather);
    setForecastWeather(forecastWeather);
    setIsLoaing(false);
  };

  useEffect(() => {
    setDataWorkFlow("sydney");
  }, []);

  return (
    <div style={{display:'flex'}}>
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
      <Container>
        <SearchBar1 setDataWorkFlow={setDataWorkFlow} />
        {isLoading ? (
          <LoadingElement loading={isLoading} />
        ) : (
          <>
            <CurrentWeather weatherInfos={weather} />
            <ForecaseWeather forecastWeatherInfos={forecastWeather} />
          </>
        )}
      </Container>
    </div>
  );
};

export default App;
