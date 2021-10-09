import React from "react";
import styled from "styled-components";
import ResultContainer from "../../../ResultContainer/ResultContainer";
import { WeatherIcon, TextStyle, CardStyle } from "../../../Style/Style";
import { MQ } from "../../../../mediaQueries";

const DisplayContainer = styled.div`
  ${MQ("sm")`
    display: none;
  `}
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
  ${CardStyle};
`;
const Time = styled.span`
  ${TextStyle};
  font-size: 20px;
`;
const Temperature = styled.span`
  ${TextStyle};
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
    <DisplayContainer>
      <ResultContainer subtitle="Todays weather">
        <WeatherInfos>
          {displayHourList.map((info, index) => (
            <InfoWrapper key={index}>
              <Time>{info.time}</Time>
              <WeatherIcon icon={info.weather[0].icon} />
              <Temperature>{info.temperature}&deg;</Temperature>
            </InfoWrapper>
          ))}
        </WeatherInfos>
      </ResultContainer>
    </DisplayContainer>
  );
};

export default Hourly;
