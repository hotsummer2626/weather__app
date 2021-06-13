import React, { Component } from "react";
import "./index.css";

export default class SearchBar extends Component {
  render() {
    const {
      weatherIcon,
      description,
      temperature,
      location,
      min,
      max,
      humidity,
    } = this.props;

    return (
      <div className="weather">
        <div className="weather__location">{location}</div>
        <div className="weather__temp">{temperature}&deg;</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="weather__icon">
            <img
              src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              alt="weather-icon"
            />
          </div>
          <div className="weather__description">{description}</div>
        </div>
        <div className="weather__otherinfo">
          || Min: {min}&deg; || Max: {max}&deg; || humidity: {humidity}%
        </div>
      </div>
    );
  }
}
