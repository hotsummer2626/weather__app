import React, { Fragment } from "react";
import styled from "styled-components";
import Hourly from "./components/Hourly/Hourly";
import Daily from "./components/Daily/Daily";

const ForecaseWeather = ({ forecastWeatherInfos }) => {
  const { hourly, daily } = forecastWeatherInfos;
  return (
    <Fragment>
      <Hourly weatherInfos={hourly} />
      <Daily weatherInfos={daily} />
    </Fragment>
  );
};

export default ForecaseWeather;
