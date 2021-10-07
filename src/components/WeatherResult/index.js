import React, { Component } from "react";
import "./index.css";

export default class SearchBar extends Component {
  render() {
    const { weather, main, name, sys, temperature } = this.props;
    const location = `${name} | ${sys.country}`;
    const weatherIcon = weather[0].icon;
    const description = weather[0].description;
    const minTemp = parseFloat(main.temp_min - 273.15).toFixed(1);
    const maxTemp = parseFloat(main.temp_max - 273.15).toFixed(1);
    const humidity = main.humidity;

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
          || Min: {minTemp}&deg; || Max: {maxTemp}&deg; || humidity: {humidity}%
        </div>
      </div>
    );
  }
}
