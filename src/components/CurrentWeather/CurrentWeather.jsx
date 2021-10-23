import React from "react";
import styled from "styled-components";
import { MONTH_TEXT, WEEK_TEXT } from "../../constants/constants";
import ResultContainer from "../ResultContainer/ResultContainer";
import { WeatherIcon, TextStyle, CardStyle } from "../Style/Style";
import { MQ } from "../../mediaQueries";
import { buildRelevantInfoList } from "./buildRelevantInfoList";

const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    background-color: #fff;
    position: absolute;
  }
  ${CardStyle};
  ${MQ("sm")`
    grid-template-columns: initial;
    &:before {
      display: none;
    }
  `}
`;
const Temperature = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  text-align: center;
  ${MQ("sm")`
    gap: initial;
  `}
`;
const Icon = styled(WeatherIcon)`
  width: 200px;
  ${MQ("sm")`
    width: 140px;
  `}
`;
const Number = styled.span`
  ${TextStyle};
  display: block;
  font-size: 80px;
  ${MQ("sm")`
    font-size: 50px;
  `}
`;
const Description = styled.span`
  ${TextStyle};
  font-size: 20px;
`;
const RelevantInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  text-align: center;
  row-gap: 1rem;
  column-gap: 2rem;
  ${MQ("sm")`
    display: none;
  `}
`;
const InfoWrapper = styled.div``;
const InfoValue = styled.span`
  ${TextStyle};
  display: block;
  font-size: 25px;
  ${MQ("sm")`
    font-size: 20px;
  `}
`;
const InfoText = styled.span`
  ${TextStyle};
  ${MQ("sm")`
    font-size: 10px;
  `}
`;

const CurrentWeather = ({ weatherInfos }) => {
  const { name, sys, dt, weather, temperature } = weatherInfos;
  const date = new Date(dt * 1000);
  const week = WEEK_TEXT[date.getDay()].full;
  const day = date.getDate();
  const month = MONTH_TEXT[date.getMonth()];

  const renderRelevantInfos = (info) => (
    <RelevantInfos>
      {buildRelevantInfoList(info).map(({ text, value }) => (
        <InfoWrapper key={text}>
          <InfoValue>{value}</InfoValue>
          <InfoText>{text}</InfoText>
        </InfoWrapper>
      ))}
    </RelevantInfos>
  );

  return (
    <ResultContainer
      title={`${name} | ${sys.country}`}
      subtitle={`${week} ${day} ${month}`}
    >
      <WeatherDetails>
        <Temperature>
          <Icon icon={weather[0].icon} />
          <div>
            <Number>{temperature}&deg;</Number>
            <Description>{weather[0].description}</Description>
          </div>
        </Temperature>
        {renderRelevantInfos(weatherInfos)}
      </WeatherDetails>
    </ResultContainer>
  );
};

export default CurrentWeather;
