import React, { Component, useState } from "react";
import axios from "axios";
import getWeatherData from "./getWeatherData";
import APIKEY from "./apikey";
import "./index.css";

// export default class SearchBar extends Component {
//   state = {
//     data: {},
//   };
//   getWeather = (event) => {
//     const { updateWeather } = this.props;
//     const defaultUrl = "http://api.openweathermap.org/data/2.5";
//     const apiKey = APIKEY;
//     const { keyCode, target } = event;
//     let cityName = target.value;
//     if (keyCode !== 13) return;
//     if (cityName.trim() === "") {
//       alert("input cannot be empty!!!");
//       return;
//     }

//     updateWeather({ initial: false, loading: true });

//     axios.get(`${defaultUrl}/weather?q=${cityName}&appid=${apiKey}`).then(
//       (response) => {
//         const data = response.data;
//         this.setState({ data }, () => {
//           console.log(this.state.data);
//           const { lat, lon } = this.state.data.coord;
//           axios
//             .get(
//               `${defaultUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}`
//             )
//             .then((res) => {
//               console.log(res.data);
//             });
//         });
//         const newWeather = getWeatherData(data);
//         updateWeather(newWeather);
//         target.value = "";
//       },
//       (error) => {
//         alert(error.message);
//         updateWeather({ loading: false });
//         target.value = "";
//       }
//     );
//   };

//   render() {
//     return (
//       <div className="form">
//         <input
//           onKeyUp={this.getWeather}
//           type="text"
//           name="city"
//           placeholder="please enter city name"
//         />
//       </div>
//     );
//   }
// }

const SearchBar = ({ setDataWorkFlow }) => {
  const [searchText, setSearchText] = useState("");
  const getWeather = (e) => {
    const { keyCode, target } = e;
    let cityName = target.value;
    if (keyCode !== 13) return;
    if (cityName.trim() === "") {
      alert("input cannot be empty!!!");
      return;
    }
    setDataWorkFlow(searchText);
    setSearchText("");
  };
  return (
    <div className="form">
      <input
        type="text"
        value={searchText}
        onKeyUp={getWeather}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="please enter city name"
      />
    </div>
  );
};

export default SearchBar;
