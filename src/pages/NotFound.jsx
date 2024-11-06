import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <StyledDiv>
      <h1>404</h1>
      <h1>OOOOOPS!</h1>
      <h3>PAGE NOT FOUND</h3>
      <StyleldLink to={"/"}>Home page</StyleldLink>
    </StyledDiv>
  );
};

export default NotFound;
const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > h3 {
    font-size: 80px;
  }
  & > h1 {
    font-size: 100px;
  }
  `;

const StyleldLink = styled(Link)`
  font-size: 60px;
  text-decoration: none;
  color: #2e74b1;
`;
