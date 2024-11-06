import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/slices/trelloSlice";
import { RiCloseLargeLine } from "react-icons/ri";
import styled from "styled-components";

const TrelloForm = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const submitAllHandler = (e) => {
    e.preventDefault();
    const newTRello = {
      title: value,
      id: Date.now(),
      list: [],
    };

    dispatch(addCard(newTRello));

    closeHandler();
  };
  return (
    <div>
      <StyledForm onSubmit={submitAllHandler}>
        <div>
          <input type="text" value={value} onChange={onChange} />
        </div>
        <div>
          <StyledButton type="submit">добавить список</StyledButton>
          <RiCloseLargeLine onClick={closeHandler} />
        </div>
      </StyledForm>
    </div>
  );
};

export default TrelloForm;
const StyledForm = styled.form`
  width: 200px;
  height: 110px;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & > section {
    height: 50px;
    & > input {
      width: 100%;
      height: 40px;
      padding-left: 12px;
      border-radius: 6px;
      border: 1px solid gray;
    }
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const StyledButton = styled.button`
  padding: 5px 8px;
  background-color: gray;
  width: fit-content;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  gap: 9px;
  border-radius: 7px;
  cursor: pointer;
`;
