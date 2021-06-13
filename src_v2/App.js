import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import CityList from "./components/CityList";
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
    cityArr: [],
  };

  updateWeather = (newWeatherObj) => {
    this.setState({ ...newWeatherObj });
  };

  updateCityArr = (newCityObj) => {
    const { cityArr } = this.state;
    const newCityArr = [...cityArr, newCityObj];
    this.setState({ cityArr: newCityArr });
  };

  deleteCityObj = (id) => {
    const { cityArr } = this.state;
    const newCityArr = cityArr.filter((cityObj) => {
      return cityObj.id !== id;
    });
    this.setState({ cityArr: newCityArr });
  };

  render() {
    const override = `
    display: block;
    margin: 0 auto;
    border-color: black;
    `;

    return (
      <div className="container">
        <SearchBar
          updateWeather={this.updateWeather}
          updateCityArr={this.updateCityArr}
        />
        {this.state.initial ? (
          <h1></h1>
        ) : this.state.loading ? (
          <div className="loader-container">
            <ScaleLoader
              css={override}
              size={200}
              color={"#fff"}
              loading={this.state.loading}
            />
          </div>
        ) : (
          <WeatherResult {...this.state} />
        )}
        <CityList {...this.state} deleteCityObj={this.deleteCityObj} />
      </div>
    );
  }
}
