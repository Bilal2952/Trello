import React from "react";
import { useForm } from "react-hook-form";
import { FaTrello } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInRequest } from "../../store/thunk/authThunk";
import ErrorMessages from "../UI/ErrorMessages";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitHandler = (userData) => {
    if (userData) {
      userData.role = "ADMIN";
    }
    dispatch(signInRequest({ userData, navigate }));
  };

  return (
    <StyledRegisterPage>
      <StyledH1>
        <IconInfo /> TRELLO
      </StyledH1>
      <StyledContainer>
        <form onSubmit={handleSubmit(() => submitHandler())}>
          <input
            type="email"
            placeholder="Введите email..."
            {...register("email", {
              required: {
                value: true,
                message: "введите email",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                message: "Hе пправельно введён email",
              },
            })}
          />
          <ErrorMessages>{errors?.email?.message}</ErrorMessages>
          <input
            type="password"
            placeholder="Введите пароль..."
            {...register("password", {
              required: { value: true, message: "введите password" },
              minLength: {
                value: 6,
                message: "Пароль должен быть не менее шести символов!",
              },
              maxLength: {
                value: 15,
                message: "Пароль не должен быть больше 15 символов",
              },
            })}
          />
          <ErrorMessages>{errors?.password?.message}</ErrorMessages>
          <button>Отправить</button>
          <StyledtLink>
            {" "}
            У вас нету аккаунта?{" "}
            <StyledtLink to={"/register"}>
              Зарегестрировать аккаунт!
            </StyledtLink>
          </StyledtLink>
        </form>
      </StyledContainer>
    </StyledRegisterPage>
  );
};

export default Login;

const StyledRegisterPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;
const StyledContainer = styled.div`
  width: 480px;
  height: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > form {
    width: 500px;
    height: fit-content;
    background-color: #eae6e6;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 25px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    & > input {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      padding-left: 10px;
    }
    & > button {
      height: 60px;
      border-radius: 10px;
      background-color: green;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border: 1px solid aquamarine;
      cursor: pointer;
    }
  }
`;
const StyledtLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 15px;
  text-decoration: none;
  padding-left: 18px;
`;
const IconInfo = styled(FaTrello)`
  position: relative;
  top: 5px;
`;
const StyledH1 = styled.h1`
  color: #4275d5;
`;
