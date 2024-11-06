import React from "react";
import styled from "styled-components";

const ErrorMessages = ({ children }) => {
  return <StyledErrorMessages>{children}</StyledErrorMessages>;
};

export default ErrorMessages;
const StyledErrorMessages = styled.span`
  color: red;
  font-size: 14px;
`;
