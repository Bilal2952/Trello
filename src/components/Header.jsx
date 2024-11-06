import React, { useState } from "react";
import { CgChevronDown, CgMenuGridO, CgSearch, CgTrello } from "react-icons/cg";
import { GrInfo } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleOpenCard } from "../store/slices/trelloSlice";
import { ModalUI } from "./UI/ModalUI";

const Header = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const logOutHandler = () => {
    setOpenModal(true);
  };
  const logOutHandlerClose = () => {
    setOpenModal(false);
  };
  const logOutAllHandler = () => {
    window.location.pathname = "/login";
    return localStorage.removeItem("auth");
  };

  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledIconWrapper>
          <IconOne />
          <IconTwo />
          <StyledTrello>TRELLO</StyledTrello>
        </StyledIconWrapper>

        <p>
          Рабочие пространства <CgChevronDown />
        </p>
        <p>
          Недавние
          <CgChevronDown />
        </p>
        <p>
          В избранном <CgChevronDown />
        </p>
        <p>
          Шаблоны <CgChevronDown />
        </p>
        <button onClick={() => dispatch(handleOpenCard())}>Создать</button>
      </StyledWrapper>
      <StyledIcon>
        <StyledInput>
          <input type="text" placeholder="Поиск..." />
          <IconSearch />
        </StyledInput>
        <IconNotification />
        <IconInfo />
        <CgProfile fontSize={25} color="white" />

        <IconLogOut onClick={logOutHandler} />
      </StyledIcon>
      {openModal && (
        <ModalUI onClose={logOutHandlerClose}>
          <StyledWrapperModal>
            <StyledTitleModal>
              Вы точно уверены что хотите выйти?
            </StyledTitleModal>
            <StyledWrapperBtnModal>
              <StyledBtnFirst onClick={logOutAllHandler}>yes</StyledBtnFirst>
              <StyledBtnSecond onClick={logOutHandlerClose}>
                No
              </StyledBtnSecond>
            </StyledWrapperBtnModal>
          </StyledWrapperModal>
        </ModalUI>
      )}
    </StyledHeader>
  );
};

export default Header;
const StyledWrapperBtnModal = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
`;
const StyledWrapperModal = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 35px;
`;
const StyledTitleModal = styled.h2`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
const StyledBtnFirst = styled.button`
  background-color: #ffffff;
  color: #0c0808;
  width: 90px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid red;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: red;
    border: 1px solid hotpink;
    color: white;
  }
`;
const StyledBtnSecond = styled.button`
  background-color: #ffffff;
  color: #0c0808;
  width: 90px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #1f712b;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #0a791b;
    color: white;
  }
`;
const StyledTrello = styled.h2`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: #4b4857;
  display: flex;
  color: #ececec;
  justify-content: space-between;
`;
const StyledWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  & > button {
    background-color: blue;
    color: white;
    width: 90px;
    height: 30px;
    border-radius: 8px;
    border: none;
  }
`;
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 15px;
`;
const StyledIconWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const IconOne = styled(CgMenuGridO)`
  width: 35px;
  height: 28px;
`;
const IconTwo = styled(CgTrello)`
  width: 35px;
  height: 28px;
`;
const IconNotification = styled(IoMdNotifications)`
  width: 28px;
  height: 24px;
`;
const IconInfo = styled(GrInfo)`
  width: 25px;
  height: 21px;
`;
const IconLogOut = styled(SlLogout)`
  width: 25px;
  height: 21px;
`;
const IconSearch = styled(CgSearch)`
  position: relative;
  right: 2rem;
  top: 4px;
  color: black;
`;
const StyledInput = styled.div`
  & > input {
    border-radius: 7px;
    width: 180px;
    height: 27px;
    border: none;
  }
`;
