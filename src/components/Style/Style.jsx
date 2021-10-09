import styled, { css } from "styled-components";

export const WeatherIcon = styled.img.attrs(({ icon }) => ({
  src: `http://openweathermap.org/img/wn/${icon}@2x.png`,
  alt: "weather-icon",
}))`
  display: block;
  width: ${({ size }) => (size ? size : "")};
`;

export const TextStyle = css`
  color: #fff;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  font-weight: 600;
`;

export const CardStyle = css`
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
`;
