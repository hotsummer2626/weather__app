import React, { Component } from "react";
import LoadingElement from "./components/LoadingElement";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import "./App.css";

export default class App extends Component {
  state = {
    weatherIcon: undefined,
    description: undefined,
    temperature: undefined,
    location: undefined,
    min: undefined,
    max: undefined,
    humidity: undefined,
    loading: false,
    initial: true,
  };

  updateWeather = (newWeatherObj) => {
    this.setState({ ...newWeatherObj });
  };

  render() {
    const { temperature, initial, loading } = this.state;
    return (
      <div className={temperature > 16 ? "container warm" : "container"}>
        <SearchBar updateWeather={this.updateWeather} />
        {initial ? (
          <h1></h1>
        ) : loading ? (
          <LoadingElement loading={loading} />
        ) : (
          <WeatherResult {...this.state} />
        )}
      </div>
    );
  }
}
