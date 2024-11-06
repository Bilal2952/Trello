import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { GrMore } from "react-icons/gr";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addNewCard } from "../../../store/slices/trelloSlice";
import InfoCard from "./InfoCard";
const CardList = ({ title, id, list }) => {
  const [openAndCloseCard, setOpenAndCloseCard] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);

  const updateStateModal = () => {
    setModalToggle(true);
  };
  const updateStateModalHandler = () => {
    setModalToggle(false);
  };

  const [inputChange, setInputChange] = useState("");
  const dispatch = useDispatch();

  const onChange = (e) => {
    setInputChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      descripton: inputChange,
      id: Date.now(),
    };
    dispatch(addNewCard({ newTodo, cardId: id }));
    setInputChange("");
    setOpenAndCloseCard(false);
  };

  const openCard = () => {
    setOpenAndCloseCard(true);
  };

  return (
    <StyledLiWrapper key={id}>
      <StyledNameToDo>
        <h4>{title}</h4>
        <GrMore onClick={updateStateModal} />
      </StyledNameToDo>

      <SstyledWrapperContentCard>
        {list.map((item) => (
          <div key={item.id}>
            <p>{item.descripton}</p>
          </div>
        ))}
      </SstyledWrapperContentCard>

      {openAndCloseCard === true ? (
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" value={inputChange} onChange={onChange} />
        </form>
      ) : null}
      <div>
        <FiPlus onClick={openCard} />
        <StyledSpan onClick={openCard}>
          {openAndCloseCard ? "добавить карточку" : "добавить список"}
        </StyledSpan>
      </div>
      {modalToggle && (
        <InfoCard
          addCard={openCard}
          id={id}
          onClick={updateStateModalHandler}
        />
      )}
    </StyledLiWrapper>
  );
};

export default CardList;
const StyledInput = styled.input`
  height: 30px;
  width: fit-content;
  border: 0.5px solid gray;
  border-radius: 17px;
`;
const SstyledWrapperContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > div > p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const StyledSpan = styled.span`
  cursor: pointer;
`;
const StyledLiWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  padding: 18px;
  position: relative;
  gap: 20px;
`;
const StyledNameToDo = styled.div`
  display: flex;
  justify-content: space-between;
`;
