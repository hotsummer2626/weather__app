import React from "react";
import styled from "styled-components";
import { TextStyle } from "../Style/Style";
import {MQ} from '../../mediaQueries'

const Container = styled.div`
  padding-bottom: 20px;
`;
const Title = styled.h1`
  ${TextStyle};
  font-size: 50px;
  ${MQ("sm")`
    font-size: 24px;
  `}
`;
const Subtitle = styled.h2`
  ${TextStyle};
  font-size: 25px;
  ${MQ("sm")`
    font-size: 15px;
  `}
  margin-bottom: 10px;
`;

const ResultContainer = ({ title, subtitle, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Subtitle>{subtitle}</Subtitle>
      {children}
    </Container>
  );
};

export default ResultContainer;
