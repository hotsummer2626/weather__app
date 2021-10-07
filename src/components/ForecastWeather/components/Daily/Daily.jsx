import React from "react";
import styled from "styled-components";
import { WEEK_TEXT } from "../../../../constants/weeks";

const Container = styled.div``;
const Title = styled.h2``;
const WeatherInfos = styled.div`
display: grid;
row-gap: 2px;
background-color: gray;
border-top: 2px solid gray;
border-bottom: 2px solid gray;

`;
const InfoWrapper = styled.div`
background-color: #fff;
display: grid;
grid-template-columns:0.8fr 1fr 4fr;
justify-items: center;
`;
const Time = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Week = styled.span`
font-size: 25px;
`;
const Day = styled.span``;
const Icon = styled.img.attrs(({ icon }) => ({
  src: `http://openweathermap.org/img/wn/${icon}@2x.png`,
  alt: "weather-icon",
}))``;
const RelevantInfos = styled.div`
display: grid;
column-gap: 6rem;
grid-template-columns: repeat(4,1fr);
`;
const RelevantInfoWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
`;
const InfoValue = styled.span`
font-size: 25px;
`;
const InfoText = styled.span``;

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

  const buildRelevantInfoList = ({ humidity, wind_speed, temp }) => {
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
      { text: "Humidity", value: humidity },
    ];
  };

  return (
    <Container>
      <Title>Next 5 days</Title>
      <WeatherInfos>
        {displayDailyList.map((info, index) => (
          <InfoWrapper key={index}>
            <Time>
              <Week>{info.week}</Week>
              <Day>{`${info.day}/${info.month}`}</Day>
            </Time>
            <Icon icon={info.weather[0].icon} />
            <RelevantInfos>
              {buildRelevantInfoList(info).map(({ text, value }) => (
                <RelevantInfoWrapper key={text}>
                  <InfoValue>{value}</InfoValue>
                  <InfoText>{text}</InfoText>
                </RelevantInfoWrapper>
              ))}
            </RelevantInfos>
          </InfoWrapper>
        ))}
      </WeatherInfos>
    </Container>
  );
};

export default Daily;
