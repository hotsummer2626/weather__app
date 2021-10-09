import React from "react";
import styled from "styled-components";
import { WEEK_TEXT } from "../../../../constants/constants";
import ResultContainer from "../../../ResultContainer/ResultContainer";
import { WeatherIcon, TextStyle, CardStyle } from "../../../Style/Style";
import { MQ } from "../../../../mediaQueries";
import { buildRelevantInfoList } from "./buildRelevantInfoList";

const WeatherInfos = styled.div`
  display: grid;
  row-gap: 2px;
  ${MQ("sm")`
    grid-template-columns: repeat(5, 1fr);
    gap: 4px;
  `}
`;
const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr 4fr;
  justify-items: center;
  align-items: center;
  ${CardStyle};
  ${MQ("sm")`
    grid-template-columns: initial;
    padding: 20px 0;
  `}
`;
const Time = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled(WeatherIcon)`
  ${MQ("sm")`
    width: 80px;
  `}
`;
const Week = styled.span`
  ${TextStyle};
  font-size: 25px;
  ${MQ("sm")`
    font-size: 20px;
  `}
`;
const Day = styled.span`
  ${TextStyle};
  ${MQ("sm")`
    display: none;
  `}
`;

const RelevantInfos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  ${MQ("sm")`
    display: none;
  `}
`;
const RelevantInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const InfoValue = styled.span`
  ${TextStyle};
  font-size: 25px;
`;
const InfoText = styled.span`
  ${TextStyle};
`;
const InfoRange = styled.span`
  display: none;
  ${TextStyle};
  ${MQ("sm")`
    display: initial;
    font-size: 20px;
  `}
`;

const Daily = ({ weatherInfos }) => {
  console.log(weatherInfos);
  const displayDailyIndexList = [1, 2, 3, 4, 5];
  const displayDailyList = displayDailyIndexList.map((dailyIndex) => {
    const date = new Date(weatherInfos[dailyIndex].dt * 1000);
    const week = WEEK_TEXT[date.getDay()].abb;
    const month = date.getMonth();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return { week, month, day, ...weatherInfos[dailyIndex] };
  });

  const renderTime = (info) => (
    <Time>
      <Week>{info.week}</Week>
      <Day>{`${info.day}/${info.month}`}</Day>
    </Time>
  );

  const renderRelevantInfos = (info) => (
    <RelevantInfos>
      {buildRelevantInfoList(info).map(({ text, value }) => (
        <RelevantInfoWrapper key={text}>
          <InfoValue>{value}</InfoValue>
          <InfoText>{text}</InfoText>
        </RelevantInfoWrapper>
      ))}
    </RelevantInfos>
  );

  const renderInfoRange = (info) => (
    <InfoRange>{`${parseInt(info.temp.min - 273.15)}~${parseInt(
      info.temp.max - 273.15
    )}°`}</InfoRange>
  );

  return (
    <ResultContainer subtitle="Next 5 days">
      <WeatherInfos>
        {displayDailyList.map((info, index) => (
          <InfoWrapper key={index}>
            {renderTime(info)}
            <Icon icon={info.weather[0].icon} />
            {renderRelevantInfos(info)}
            {renderInfoRange(info)}
          </InfoWrapper>
        ))}
      </WeatherInfos>
    </ResultContainer>
  );
};

export default Daily;
