import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
`;
const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
`;
const WeatherInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 2rem;
`;
const InfoWrapper = styled.div`
  padding: 15px 0;
  display: grid;
  justify-items: center;
  border: 1px solid black;
  border-radius: 8px;
`;
const Time = styled.span`
  font-size: 20px;
`;
const Icon = styled.img.attrs(({ icon }) => ({
  src: `http://openweathermap.org/img/wn/${icon}@2x.png`,
  alt: "weather-icon",
}))``;
const Temperature = styled.span`
  font-size: 20px;
`;

const Hourly = ({ weatherInfos }) => {
  const displayHourIndexList = [3, 6, 9, 12, 15, 18, 21];
  const displayHourList = displayHourIndexList.map((hourIndex) => {
    const date = new Date(weatherInfos[hourIndex].dt * 1000);
    const hour = date.getHours();
    weatherInfos[hourIndex].time = `${hour}:00`;
    weatherInfos[hourIndex].temperature = parseFloat(
      weatherInfos[hourIndex].temp - 273.15
    ).toFixed(1);
    return weatherInfos[hourIndex];
  });

  return (
    <Container>
      <Title>Todays weather</Title>
      <WeatherInfos>
        {displayHourList.map((info, index) => (
          <InfoWrapper key={index}>
            <Time>{info.time}</Time>
            <Icon icon={info.weather[0].icon} />
            <Temperature>{info.temperature}&deg;</Temperature>
          </InfoWrapper>
        ))}
      </WeatherInfos>
    </Container>
  );
};

export default Hourly;
