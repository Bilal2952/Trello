import React from "react";
import Header from "../components/Header";
import MainPage from "./MainPage";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <MainPageStyle>
        <MainPage />
      </MainPageStyle>
    </div>
  );
};

export default Layout;
const MainPageStyle = styled("main")`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.pinimg.com/originals/b5/98/90/b59890d06812bdee8423435d468e02fa.jpg");
  background-position: center;
  background-size: cover;
`;
