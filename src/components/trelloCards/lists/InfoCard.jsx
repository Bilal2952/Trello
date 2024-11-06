import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteCard } from "../../../store/slices/trelloSlice";

const InfoCard = ({ onClick, id, addCard }) => {
  const dispatch = useDispatch();
  const deleteCardHandler = (idItem) => {
    dispatch(deleteCard(idItem));
  };
  const addCardHandler = () => {
    addCard();
    onClick();
  };
  return (
    <StyledDiv>
      <StyledIconClose onClick={onClick} />
      <div>
        <p>Изменить описание</p>
        <p onClick={() => deleteCardHandler(id)}>Архививать список</p>
        <p onClick={() => addCardHandler()}>Добавить карточку</p>
        <p>Создать копию</p>
      </div>
    </StyledDiv>
  );
};

export default InfoCard;

const StyledDiv = styled.div`
  width: 165px;
  height: 140px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 104px;
  top: 12px;
  z-index: 21;
  & > div {
  border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    & > p {
      cursor: pointer;
    }
  }
`;
const StyledIconClose = styled(TiDeleteOutline)`
  position: relative;
  left: 65px;
  bottom: 10px;
`;
