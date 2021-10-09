import React, { useState } from "react";
import styled from "styled-components";
import { MQ } from "../../mediaQueries";

const Container = styled.div`
  width: 62%;
  position: absolute;
  top: 38px;
  right: 30px;
  ${MQ("sm")`
    width: 47%;
    right: 10px;
  `}
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  background: none;
  background-color: rgba(255, 255, 255, 0.5);
  outline: none;
  border: none;
  border-radius: 16px;
  box-shadow: 0 5px rgba(0, 0, 0, 0.2);
  color: #313131;
  font-size: 20px;
  transition: all 0.4s ease;
  &:focus{
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const SearchBar1 = ({ setDataWorkFlow }) => {
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
    <Container>
      <Input
        type="text"
        value={searchText}
        onKeyUp={getWeather}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="please enter city name"
      />
    </Container>
  );
};

export default SearchBar1;
