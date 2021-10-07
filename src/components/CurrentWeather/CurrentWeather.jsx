import React from "react";
import styled from "styled-components";
import { MONTH_TEXT } from "../../constants/months";
import { WEEK_TEXT } from "../../constants/weeks";

const Container = styled.div``;
const Location = styled.h1`
  font-size: 50px;
`;
const Time = styled.h2`
  font-size: 25px;
`;
const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background-color: gray;
    position: absolute;
  }
`;
const Temperature = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  text-align: center;
`;
const Icon = styled.img.attrs(({ icon }) => ({
  src: `http://openweathermap.org/img/wn/${icon}@2x.png`,
  alt: "weather-icon",
}))`
  display: block;
  width: 200px;
`;
const Number = styled.span`
  display: block;
  font-size: 80px;
`;
const Description = styled.span`
  font-size: 20px;
`;
const RelevantInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  text-align: center;
  row-gap: 1rem;
  column-gap: 2rem;
`;
const InfoWrapper = styled.div``;
const InfoValue = styled.span`
  display: block;
  font-size: 25px;
`;
const InfoText = styled.span``;

const buildRelevantInfoList = ({ main, wind, sys }) => {
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
    { text: "Humidity", value: main.humidity },
    { text: "Sunset", value: `${sunsetHour}:${sunsetMinute}` },
  ];
};

const CurrentWeather = ({ weatherInfos }) => {
  const { name, sys, dt, weather, temperature } = weatherInfos;
  const date = new Date(dt * 1000);
  const week = WEEK_TEXT[date.getDay()].full;
  const day = date.getDate();
  const month = MONTH_TEXT[date.getMonth()];
  return (
    <Container>
      <Location>{`${name} | ${sys.country}`}</Location>
      <Time>{`${week} ${day} ${month}`}</Time>
      <WeatherDetails>
        <Temperature>
          <Icon icon={weather[0].icon} />
          <div>
            <Number>{temperature}&deg;</Number>
            <Description>{weather[0].description}</Description>
          </div>
        </Temperature>
        <RelevantInfos>
          {buildRelevantInfoList(weatherInfos).map(({ text, value }) => (
            <InfoWrapper key={text}>
              <InfoValue>{value}</InfoValue>
              <InfoText>{text}</InfoText>
            </InfoWrapper>
          ))}
        </RelevantInfos>
      </WeatherDetails>
    </Container>
  );
};

export default CurrentWeather;
