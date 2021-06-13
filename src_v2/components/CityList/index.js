import React, { Component } from "react";
import "./index.css";

export default class CityList extends Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleDeleteCity = (id) => {
    return () => {
      if (window.confirm("ready to delete?")) {
        this.props.deleteCityObj(id);
      }
    };
  };

  render() {
    const { cityArr } = this.props;

    return (
      <div className="citylist">
        <div className="citylist__wrapper">
          {cityArr.map((cityObj) => {
            let cityName = cityObj.location.split("|")[0];
            return (
              <div
                key={cityObj.id}
                className="citylist__wrapper__item"
              >
                <div className="cityname">{cityName}</div>
                <img
                  src={`http://openweathermap.org/img/wn/${cityObj.weatherIcon}@2x.png`}
                  alt="weathericon"
                />
                <div className="temp">{cityObj.temperature}&deg;</div>
                <button
                  onClick={this.handleDeleteCity(cityObj.id)}
                  className="deletebtn"
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
