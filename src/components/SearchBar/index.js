import React, { Component } from "react";
import axios from "axios";
import getWeatherData from "./getWeatherData";
import APIKEY from './apikey';
import "./index.css";

export default class SearchBar extends Component {
  getWeather = (event) => {
    const { updateWeather } = this.props;
    const defaultUrl = "http://api.openweathermap.org/data/2.5";
    const apiKey = APIKEY;
    const { keyCode, target } = event;
    let cityName = target.value;
    if (keyCode !== 13) return;
    if (cityName.trim() === "") {
      alert("input cannot be empty!!!");
      return;
    }

    updateWeather({ initial: false, loading: true });

    axios.get(`${defaultUrl}/weather?q=${cityName}&appid=${apiKey}`).then(
      (response) => {
        const data = response.data;
        const newWeather = getWeatherData(data);
        updateWeather(newWeather);
      },
      (error) => {
        alert(error.message);
        updateWeather({ loading: false });
        target.value = "";
      }
    );
  };

  render() {
    return (
      <div className="form">
        <input
          onKeyUp={this.getWeather}
          type="text"
          name="city"
          placeholder="please enter city name"
        />
      </div>
    );
  }
}
