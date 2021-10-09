import React, { useState } from "react";
import "./index.css";

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
